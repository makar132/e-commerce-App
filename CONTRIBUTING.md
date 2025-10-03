# 🤝 Contributing Guidelines

Thank you for helping build our eCommerce app! This guide covers:

- **Fork-Based Workflow** (external contributors)
- **Direct Collaboration Workflow** (team members)
- Common commands for syncing and feature work

## 🍴 Fork-Based Workflow

### 1. Fork & Clone
```bash
# Fork on GitHub, then clone your fork
git clone https://github.com/YOUR_USERNAME/ecommerce-app.git
cd ecommerce-app

# Add the original repo as upstream
git remote add upstream https://github.com/yourusername/ecommerce-app.git
```  

### 2. Keep Your Fork Updated
```bash
# Fetch upstream changes
git fetch upstream

# Update local main branch
git checkout main
git merge upstream/main

# Push updates to your fork
git push origin main
```  

### 3. Start a New Feature
```bash
# Ensure you are on main with latest updates
git checkout main
git pull upstream main

# Create a feature branch
git checkout -b feature/your-feature-name
```  

### 4. Work on Your Feature
```bash
# Stage and commit changes after working
git add .
git commit -m "feat: add descriptive message"

# If main has advanced in the meantime, rebase your feature
git fetch upstream
git rebase upstream/main

# Resolve conflicts if any, then continue
# git rebase --continue

# Push branch to your fork
git push origin feature/your-feature-name
```  

### 5. Continue Working After Pausing
```bash
# Switch to your feature branch
git checkout feature/your-feature-name

# Optionally rebase onto updated main
git fetch upstream
git rebase upstream/main
```  

### 6. Open a Pull Request
1. Go to your fork on GitHub.  
2. Click **Compare & pull request**.  
3. Fill out the PR template and submit.  

### 7. Address Review Comments
```bash
# Make requested changes
git add .
git commit -m "fix: address review comments"

# Push updates
git push origin feature/your-feature-name
```  

---


## 📋 Quick Reference

| Scenario                                | Commands                                                                                          |
|-----------------------------------------|---------------------------------------------------------------------------------------------------|
| **Get latest updates (fork)**           | `git fetch upstream && git checkout main && git merge upstream/main && git push origin main`      |
| **Get latest updates (direct)**         | `git pull origin main`                                                                           |
| **Start new feature**                   | `git checkout main && git pull upstream/main && git checkout -b feature/your-feature-name`       |
| **Rebase feature onto main**            | `git fetch upstream && git checkout feature/your-feature-name && git rebase upstream/main`       |
| **Merge main into feature branch**      | `git checkout feature/your-feature-name && git merge main`                                        |
| **Push feature branch**                 | `git push origin feature/your-feature-name`                                                       |
| **Delete merged branch (local & remote)** | `git branch -d feature/your-feature-name && git push origin --delete feature/your-feature-name` |