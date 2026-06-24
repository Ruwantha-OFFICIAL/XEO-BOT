# 🤖 XEO Bot - Advanced WhatsApp Automation Bot

[![Node.js Version](https://img.shields.io/badge/Node.js-22%2B-green.svg)](https://nodejs.org/)
[![GitHub version](https://img.shields.io/badge/version-1.0.1V-blue.svg)](https://github.com/yourusername/XEO-BOT)
[![GitHub forks](https://img.shields.io/github/forks/Ruwantha-OFFICIAL/XEO-BOT.svg)](https://github.com/yourusername/XEO-BOT/network)
[![GitHub stars](https://img.shields.io/github/stars/Ruwantha-OFFICIAL/XEO-BOT.svg)](https://github.com/Ruwantha-OFFICIAL/XEO-BOT/stargazers)
[![GitHub followers](https://img.shields.io/github/followers/Ruwantha-OFFICIAL.svg)](https://github.com/Ruwantha-OFFICIAL)

> 🚀 **Transform Your WhatsApp Experience with AI-Powered Automation!**

---

## 📋 Table of Contents
- [🌟 About](#-about)
- [✨ Features](#-features)
- [📸 Demo](#-demo)
- [⚙️ Requirements](#️-requirements)
- [🚀 Installation](#-installation)
- [🔧 Configuration](#-configuration)
- [📁 Project Structure](#-project-structure)
- [🐛 Known Issues](#-known-issues)
- [👨‍💻 Author](#-author)

---

## 🌟 About

XEO Bot is a powerful, open-source WhatsApp automation bot built with Node.js and the Baileys library. It provides a robust framework for automating WhatsApp interactions, handling messages, commands, and implementing custom business logic with ease.

### 🎯 Key Highlights
- ⚡ **Real-time processing** with WebSocket technology
- 🔒 **Enterprise-grade security** with E2E encryption
- 🔄 **Automatic reconnection** on connection drops
- 🎨 **Custom command system** for flexible interaction
- 📱 **Multi-device support** across all platforms

---

## ✨ Features

### Core Features
| Feature | Description |
|---------|-------------|
| 🤖 **Smart Command System** | Custom command handling with prefix support |
| 🔐 **Secure Authentication** | QR Code and Pairing Code methods |
| 🔄 **Auto Reconnection** | Automatic reconnection on disconnection |
| 📨 **Welcome Messages** | Customizable welcome messages with images |
| 🗃️ **Session Management** | Multi-file state persistence |
| 📡 **Real-time Events** | WebSocket-based event handling |
| 🌐 **Multi-device** | Works across all WhatsApp platforms |

### Technical Features
- ✅ End-to-End Encryption support
- ✅ Protobuf protocol optimization
- ✅ Pino logging system
- ✅ Automatic session saving
- ✅ Error handling and recovery
- ✅ Modular architecture

---

## 📸 Demo

### Welcome Message
```

╭───☾ XEO BOT ☽───╮
🐛Name : XEO
🐛Versions : 1.0V
🐛Release : 2026/06
🐛Github : lering sc
╰───────────────╯

```

### Command Example
```

.alive  →  bot is live check
.ping   →  Pong! 🏓

```

---

## ⚙️ Requirements

### Software Requirements
- **Node.js**: v23.0.0 or higher
- **npm**: v7.0.0 or higher
- **Operating System**: Windows, Linux, macOS

### Hardware Requirements
- Minimum 500MB RAM
- 100MB free disk space
- Stable internet connection
- Active WhatsApp account

---

## 🚀 Installation

### Step 1: Clone the Repository
```bash
git clone https://github.com/yourusername/XEO-BOT.git
cd XEO-BOT
```

Step 2: Install Dependencies

```bash
npm install
# or
yarn install
```

Step 3: Configure the Bot

```bash
# Create config.js file (see Configuration section)
# Add required images in ./data/ folder
```

Step 4: Start the Bot

```bash
node index.js
```

---

## 🔧 Configuration

config.js Structure

```javascript
module.exports = {
    prefix: '.',
    nomber: '94788231166',
    
    root: 'Admin Name'
};
```
## 📁 Project Structure

```
xeo-bot/
├── 📂 data/
│   └── compressed_1781936918731.jpg
├── 📂 session/
│   ├── creds.json
│   └── app-state-sync/
├── 📂 node_modules/
├── 📄 index.js          # Main bot file
├── 📄 command.js        # Command handler
├── 📄 config.js         # Configuration
├── 📄 package.json      # Dependencies
├── 📄 README.md         # Documentation
└── 📄 .gitignore        # Git ignore file
```

---
## 🐛 Known Issues

Issue Status Workaround
QR Code not printing ✅ Fixed Use pairing code
Session timeout 🔄 In Progress Auto-reconnection
Memory leaks 🔍 Under Review Optimize event handlers
Image loading ✅ Fixed Use absolute paths

---
## 👨‍💻 Author

XEO Bot Team

Connect with Us

- GitHub: @Ruwantha-OFFICIAL
- WhatsApp: 94788231166
- Email: ruwanthalasith20@gmail.com

---
