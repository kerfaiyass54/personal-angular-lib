# **personal-angular-lib** 🚀
*A Modular Angular UI Library for Reusable Components*

![Angular](https://img.shields.io/badge/Angular-17.2.0-red.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3.2-blue.svg)
![MIT License](https://img.shields.io/badge/license-MIT-green.svg)

---

## **🚀 Overview**
**personal-angular-lib** is a **modular Angular UI library** designed to help developers build **reusable, well-structured components** with ease. Whether you're working on a **single-page application (SPA)**, a **large-scale enterprise system**, or a **custom web solution**, this library provides **pre-built, production-ready components** that follow **Angular best practices**.

### **Key Features**
✅ **Reusable Angular Components** – Build once, use anywhere
✅ **Standalone Components** – No dependency on Angular modules
✅ **TypeScript Support** – Strong typing for better developer experience
✅ **Modular Architecture** – Easy to extend and customize
✅ **Optimized for Performance** – Minimal bundle size, efficient rendering
✅ **Well-Documented** – Clear examples and usage guides

### **Who Is This For?**
- **Frontend Developers** looking to speed up UI development
- **Angular Teams** maintaining large-scale applications
- **UI/UX Designers** who want to implement polished components quickly
- **Startups & Enterprises** needing a **scalable UI foundation**

---

## **✨ Features**
| Feature | Description |
|---------|------------|
| **Shared UI Components** | Pre-built, reusable components (buttons, modals, cards, etc.) |
| **Angular Standalone** | No module dependencies, easy integration |
| **TypeScript Support** | Strong typing for better IDE support |
| **Customizable Themes** | Easy-to-modify CSS variables for branding |
| **Responsive Design** | Works seamlessly on all devices |
| **Accessibility-Friendly** | Follows WAI-ARIA and WCAG guidelines |
| **Optimized Builds** | Minimal bundle size for fast loading |

---

## **🛠️ Tech Stack**
| Category | Tools & Libraries |
|----------|------------------|
| **Framework** | Angular 17.2.0 |
| **Language** | TypeScript 5.3.2 |
| **Build Tool** | Angular CLI 17.2.2 |
| **Testing** | Jasmine + Karma |
| **Packaging** | `ng-packagr` for library distribution |
| **Styling** | CSS Variables, SCSS (optional) |

### **System Requirements**
- **Node.js** (v18.13.0 or higher)
- **npm** / **yarn** / **pnpm** (v7.0.0+ recommended)
- **Angular CLI** (v17.2.0+)

---

## **📦 Installation**

### **Prerequisites**
1. **Install Node.js** (v18.13.0+)
   🔗 [Download Node.js](https://nodejs.org/)
2. **Install Angular CLI** (v17.2.0+)
   ```bash
   npm install -g @angular/cli@latest
   ```

### **Quick Start**
#### **1. Clone the Repository**
```bash
git clone https://github.com/your-username/personal-angular-lib.git
cd personal-angular-lib
```

#### **2. Install Dependencies**
```bash
npm install
# or
yarn install
```

#### **3. Build the Library**
```bash
ng build shared-ui
```
This generates the library in `dist/shared-ui`.

#### **4. Publish to npm (Optional)**
```bash
cd dist/shared-ui
npm publish
```

---

### **Alternative: Use as a Local Dependency**
If you want to **use the library locally** in another Angular project:
```bash
npm link
```
Then, in your **target project**, add:
```bash
npm link personal-angular-lib
```

---

## **🎯 Usage**

### **1. Importing Components in Your Angular App**
#### **Example: Using `SharedUiComponent`**
```typescript
// In your Angular module or component
import { SharedUiComponent } from 'shared-ui';

// In your template (HTML)
<lib-shared-ui></lib-shared-ui>
```

#### **Example: Using a Custom Component (e.g., `ButtonComponent`)**
```typescript
// If you add a new component (e.g., Button)
import { ButtonComponent } from 'shared-ui';

// In your template
<button lib-button type="primary">Click Me</button>
```

---

### **2. Customizing Styles**
The library uses **CSS variables** for easy theming. Override them in your global styles:
```css
:root {
  --pill-accent: #ff00ff; /* Change default accent color */
  --gray-900: #121212; /* Custom dark theme */
}
```

---

### **3. Adding New Components**
To **extend the library**:
```bash
ng generate component button --project shared-ui
```
This creates a new component inside `projects/shared-ui/src/lib/`.

---

## **🔧 Configuration**

### **Customizing the Library**
1. **Modify `ng-package.json`** to adjust build settings.
2. **Update `public-api.ts`** to expose new components.
3. **Extend `tsconfig.lib.json`** for advanced TypeScript options.

---

## **🤝 Contributing**
We welcome **contributions**! Here’s how you can help:

### **1. Development Setup**
```bash
git clone https://github.com/your-username/personal-angular-lib.git
cd personal-angular-lib
npm install
```

### **2. Running Tests**
```bash
ng test shared-ui
```

### **3. Building for Production**
```bash
ng build shared-ui --configuration production
```

### **4. Code Style Guidelines**
- Follow **Angular Style Guide** ([link](https://angular.io/guide/styleguide))
- Use **TypeScript best practices**
- Write **clear, concise commit messages**

### **5. Submitting a Pull Request**
1. **Fork the repo** → **Create a branch** → **Make changes**
2. **Test your changes** → **Write tests** (if applicable)
3. **Submit a PR** with a **detailed description**

---


## **🐛 Issues & Support**
### **Reporting Bugs**
Found a bug? Open an **issue** with:
✅ **Steps to reproduce**
✅ **Expected vs. actual behavior**
✅ **Screenshots/logs (if applicable)**


### **FAQ**
| Question | Answer |
|----------|--------|
| **How do I update the library?** | Run `npm update personal-angular-lib` |
| **Can I use this in a commercial project?** | Yes! MIT License allows it. |
| **How do I add a new component?** | Use `ng generate component --project shared-ui` |

---

## **🗺️ Roadmap**
| Feature | Status | Description |
|---------|--------|-------------|
| **Dark Mode Support** | ⚠️ Planned | Add dark/light theme toggling |
| **Internationalization (i18n)** | 🚧 In Progress | Multi-language support |
| **More Components** | 🎨 Next | Buttons, modals, forms, etc. |
| **Storybook Integration** | 📖 Planned | Interactive component demos |

---

## **💡 Final Notes**
🔥 **Star this repo** if you found it useful!
🤝 **Fork & contribute** to make it even better.
📢 **Share your feedback**—we love hearing from you!

---
**Happy Coding!** 🚀
**#Angular #UIComponents #OpenSource**
