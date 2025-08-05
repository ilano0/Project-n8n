const { createApp } = Vue;

createApp({
  data() {
    return {
      mails: [],
      summary: '',
      filter: ''
    };
  },
  computed: {
    filteredMails() {
      if (!this.filter.trim()) return this.mails;
      return this.mails.filter(mail =>
        mail.from && mail.from.toLowerCase().includes(this.filter.toLowerCase())
      );
    }
  },
  mounted() {
    fetch('mails-today.json')
      .then(res => res.json())
      .then(data => {
        const summaryMail = data.find(mail => mail.text);
        this.summary = summaryMail ? summaryMail.text : '';
        this.mails = data
          .filter(mail => mail.From)
          .map(mail => ({
            from: mail.From,
            subject: mail.Subject,
            date: mail.Date
          }));
      })
      .catch(err => {
        console.error('Erreur de chargement JSON :', err);
      });
  }
}).mount('#app');