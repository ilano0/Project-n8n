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
        mail.from.toLowerCase().includes(this.filter.toLowerCase())
      );
    }
  },
  mounted() {
    fetch('mails-today.json')
      .then(res => res.json())
      .then(data => {
        this.mails = data.mails || [];
        this.summary = data.summary || '';
      })
      .catch(err => {
        console.error('Erreur de chargement JSON :', err);
      });
  }
}).mount('#app');
