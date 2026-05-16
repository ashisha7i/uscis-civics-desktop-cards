# 🇺🇸 USCIS Civics Flashcards Desktop App

A lightweight, high-retention desktop flashcard application built with Electron, HTML5, and CSS3 3D transforms to help you study and pass the 128 USCIS Civics Test. 

[![Build and Release Status](https://github.com/ashisha7i/uscis-civics-desktop-cards/actions/workflows/build.yml/badge.svg)](https://github.com/ashisha7i/uscis-civics-desktop-cards/actions)
[![Latest Release](https://img.shields.io/github/v/release/ashisha7i/uscis-civics-desktop-cards?color=blue&label=Download&logo=github)](https://github.com/ashisha7i/uscis-civics-desktop-cards/releases/latest)
[![Platform Support](https://img.shields.io/badge/platform-macOS%20%7C%20Windows-lightgrey)](#-installation--downloads)

---

## ✨ Features

* **🔄 Cinematic 3D Card Flip**: Click anywhere on the card layout to smoothly flip between the question prompt and the official answers.
* **📌 "Always on Top" Toggle**: Embedded seamlessly in the application footer. Turn it on to keep the flashcards hovering over your active web browser, documents, or code editor while you work.
* **⭐ Tricky Question Bank**: Flag difficult or missed questions with a single click. Filter your study deck instantly into an isolated "Review Mode" to tackle your weak spots.
* **📊 Persistent Progress Metrics**: Tracks your overall view history and study percentages using client-side `localStorage`, preserving your stats across app reboots.
* **🧩 Self-Contained Local Database**: All 128 questions are baked directly inside an offline-ready structured `questions.json` dictionary architecture.

---

## 🚀 Installation & Downloads

Head over to the [GitHub Releases Page](https://github.com/ashisha7i/uscis-civics-desktop-cards/releases/latest) to download the standalone bundle for your computer. No configuration or Node.js environment is required!

###  macOS Setup (Apple Silicon & Intel)
1. Download either the `AppleSilicon.zip` (M1/M2/M3/M4) or the `Intel.zip` archive depending on your hardware.
2. Unzip the file and move `USCIS Civics Flashcards.app` to your `Applications` folder.
3. Because this app is self-built and unsigned, **macOS Gatekeeper will flag it as damaged or unverified** on the first run.
4. **The Fix**: Open your Mac Terminal, type the following command (with a trailing space), drag the app icon into the terminal window, and press **Enter**:
   ```bash
   xattr -cr /Applications/USCIS\ Civics\ Flashcards.app