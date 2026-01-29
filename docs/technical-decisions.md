# Technical Decisions

## 1. Project Context and Constraints

- **Project Nature**: Frontend Mentor Challenge - Product list with cart
- **Main Objectives**
  - Develop advanced React and CSS skills
  - Practice complex state management (shopping cart)
  - Master user interactions (modal, forms)
  - Deepen mobile-first responsive design understanding
- **Challenge-imposed constraints**
  - Figma mockups provided (mobile and desktop)
  - Optimized assets required in `/assets` folder
  - Mandatory responsive design with focus on mobile and desktop
  - Product data via local `data.json` file
- **Personal constraints**
  - Training project with controlled complexity
  - Focus on modern React development best practices
  - Desire to experiment with quality tools (tests, documentation)

## 2. Technical Stack

| Role            | Choice                         | Justification                                                                                           |
| --------------- | ------------------------------ | ------------------------------------------------------------------------------------------------------- |
| Structure       | Semantic HTML5                 | - Better accessibility<br>- SEO optimization<br>- Cleaner code structure                                |
| Styling         | CSS + Sass + Styled Components | - Hybrid approach<br>- Sass for global styles and variables/mixins <br>- SC for component encapsulation |
| Logic           | JavaScript                     | - Native web language<br>- Excellent React ecosystem<br>- Sufficient for project complexity             |
| Framework       | React                          | - Component-based architecture <br>- Ideal for cart state management <br>- UI reusability               |
| Bundler         | Vite                           | - Fast HMR<br>- Modern ES modules support<br>- Better DX than webpack for this project size             |
| Package Manager | npm                            | - Industry standard<br>- Reliable dependency management<br>- Integrated with React ecosystem            |
| Unit Tests      | Jest + React Testing Library   | - React testing best practices<br>- Encourages testing user behavior over implementation                |
| Documentation   | Storybook                      | - Component isolation for development<br>- Living documentation<br>- Design system foundation           |

## 3. Styling Strategy

- **CSS approach chosen**
  - Hybrid: Sass for variables and global styles + Styled Components for components
  - Local fonts usage for better performance
- **Structuring methodology**
  - BEM for global CSS classes
  - Modular organization with barrels for imports
- **Responsive management**
  - **Mobile-first**: progressive approach from mobile to desktop
  - CSS Grid for complex layouts
- **Reasons for these choices**
  - Mobile-first matches current usage patterns
  - Styled Components for React style encapsulation
  - CSS Grid for flexible and modern layouts

## 4. Project Structure

- **Folder organization**

```js
// To do
```

- `src/`: main source code
- `assets/`: images and static resources
- `components/`: reusable React components
- `docs/`: technical documentation and decisions
- Tests: co-located with components
- **Naming conventions**
  - Files: kebab-case
  - Components: PascalCase with descriptive names
  - CSS classes: BEM (block\_\_element--modifier)
- **Targeted objectives**
  - Readability: clear and predictable structure
  - Maintainability: separation of concerns
  - Scalability: modular architecture with barrels

## 5. Quality and Best Practices

- **Accessibility**
  - Semantic HTML (nav, main, section, article)
  - WCAG 2.1 compliant contrasts
  - Complete keyboard navigation
  - react-modal for accessible modals
- **Performance**
  - Optimized images provided by Frontend Mentor
  - Local fonts to avoid external requests
  - Reasonable CSS and JS with React code splitting
- **Code quality**
  - Unit tests with Jest + React Testing Library
  - Component documentation with Storybook
  - Git workflow with branches and pull requests
  - Code reviews assisted by GitHub Copilot
  - Automated deployment with GitHub Actions to GitHub Pages

## 6. Trade-offs and Improvement Opportunities

- **Deliberately simple choices**
  - No external state manager (Context API is sufficient)
  - Static data (no backend API)
  - Authentication not implemented
- **Known project limitations**
  - Data persistence limited to localStorage
  - No real payment integration
- **Possible improvements**
  - If the project were to evolve: Redux for more complex state
  - Real REST or GraphQL API integration
  - TypeScript addition for more robustness
  - E2E tests with Cypress or Playwright
