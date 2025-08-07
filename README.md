# 📬 Project-n8n — Email Summary Dashboard

This project allows you to:
- Connect to a Gmail inbox
- Retrieve all emails received **today**
- Generate a `mails-today.json` file with the sender, subject, and date
- Automatically summarize the emails using Groq AI
- Display the results in a simple web dashboard

## 📁 Project Structure

```
src/
├── app.js               # Vue.js logic
├── index.html           # UI layout
├── workflow-n8n.json    # The n8n workflow
```

---

## 🚀 How to Launch the Project

### 1. Clone the Repository

```bash
git clone https://github.com/ilano0/Project-n8n.git
cd Project-n8n
```

---

### 2. Run n8n Locally (If Not Already Running)

Make sure you're using Node.js version **between 20.19 and 24.x**:

```bash
node -v
```

Install n8n globally or use it via npx:

```bash
npm install -g n8n
```

Then start n8n:

```bash
n8n
```

Access the n8n interface at:
```
http://localhost:5678
```

---

### 3. Import the Workflow

- Open `n8n` in your browser.
- Go to **Workflows** > **Import**.
- Upload the file `src/workflow-n8n.json`.

---

### 4. Connect Your Gmail Account in n8n

1. Click on the **"Get many messages"** node.
2. Select or create a **Gmail account** credential.
3. Choose **OAuth2** as connection type.
4. Create a Google Cloud project with Gmail API enabled.
5. Fill in the **Client ID** and **Client Secret**.
6. Use the following **Redirect URI**:
```
http://localhost:5678/rest/oauth2-credential/callback
```
7. Click **Connect** and log in to your Gmail account.

---

### 5. Run the Workflow

Once connected, run the workflow using this command (replace the ID if needed):

```bash
npx n8n execute --id oSiyyQvwVZGO8PWu
```

This will generate a `mails-today.json` file containing:
- Sender (`from`)
- Subject (`subject`)
- Date (`date`)
- AI-generated summary

---

### 6. Launch the Web Interface

You can now open the HTML page to see your emails summary.

#### If using VSCode with Live Server:

- Right click `index.html` > **Open with Live Server**

#### Or with Python:

```bash
cd src
python3 -m http.server
```

Then go to:
```
http://localhost:8000
```

---

## ✅ Expected Output

- A list of today's emails is shown.
- A filter lets you search by sender.
- The Groq AI summary is shown at the top.

---

## 🧠 Tech Stack

- [Vue.js 3](https://vuejs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [n8n](https://n8n.io/)
- [Groq Chat Model](https://console.groq.com/)
- Gmail API

---

## ✍️ Author

Ilan Aitel — [GitHub](https://github.com/ilano0)