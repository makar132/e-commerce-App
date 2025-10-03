# Setup Guide

This document explains how to set up the repository both locally and remotely.

## Local Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ecommerce-app.git
   cd ecommerce-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npx expo start
   ```

4. **Run on device/emulator**
   - Press `a` for Android emulator
   - Press `i` for iOS simulator (macOS only)
   - Scan QR code with Expo Go

## Remote Setup

1. **Create GitHub repository** named `ecommerce-app`
2. **Add remote origin**
   ```bash
   git remote add origin https://github.com/yourusername/ecommerce-app.git
   ```

3. **Push initial commit**
   ```bash
   git push -u origin main
   ```

4. **Enable repository features**
   - Issues & Discussions
   - Branch protection for `main`
   - Projects or Wiki if needed

5. **Invite collaborators** via GitHub settings

## Contribution Workflow

Follow [CONTRIBUTING.md](CONTRIBUTING.md) for detailed instructions on collaborating.
