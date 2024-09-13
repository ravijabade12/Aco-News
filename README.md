# News Aggregator App

This is a responsive news aggregator application that fetches the latest news articles from the GNews API and displays them in a sleek, user-friendly interface. The project follows a step-by-step process to set up the frontend, backend, and deployment on Firebase. It includes categories for general news, sports, technology, entertainment, business, and health, along with a search functionality for specific news topics.

## Features

- **Responsive Design**: Optimized for mobile, tablet, and desktop views.
- **Category-Based News**: Users can select from various categories like sports, technology, entertainment, business, and health.
- **Search Functionality**: Users can search for news articles based on a specific category or keyword.
- **API Integration**: Fetches news data from the GNews API.
- **Firebase Hosting**: The application is deployed on Firebase for easy access.

## Steps to Build the Project

### Step 1: Get to Know the Source 🕵️‍♂️

- Sign up for an API key from [gnews.io](https://gnews.io/).
- No API key, no news!

### Step 2: Frontend – Make it Shine ✨

- Build a user-friendly, responsive UI using Bootstrap for styling.
- Focus on mobile-first design and make it adaptable for tablet and desktop.
- Implement a navbar to allow users to select categories like general news, sports, technology, entertainment, business, and health.
- Add a search input where users can type in a keyword to get news from specific categories.

### Step 3: Backend – Power it Up 🚀

- Use `fetch` to retrieve data from the GNews API.
- Manage state using React’s `useState` hook to store news articles in an array.
- Fetch and update news articles based on category or search input by using the `useEffect` hook with dependency arrays.
- Handle pagination and dynamic news loading when switching categories or performing searches.

### Step 4: Firebase is Your Home 🏡

- Deploy the app on Firebase's Free Tier.
- Firebase hosting allows your application to be accessible from anywhere, giving users access to live news on the go.

## How It Works

### API Integration

- The app fetches news articles using the GNews API.
- The API key is used to authenticate the requests.
- News articles are fetched based on categories such as general, sports, technology, entertainment, business, and health.
- When a category is selected from the navbar, the app fetches news for that category and displays it dynamically.

### Frontend (UI/UX)

- The application is built using React and Bootstrap for UI design.
- The landing page displays general news articles.
- Users can switch between different categories using the navbar, which triggers an API call to fetch news for the selected category.
- The search input allows users to type in a category or keyword, and the app fetches and displays the relevant news articles.
- The layout is responsive and adapts to different screen sizes, making it easy to navigate on mobile, tablet, and desktop.

### State Management

- The `useState` hook is used to manage the state of news articles.
- The `useEffect` hook is used to trigger data fetching based on the selected category or search keyword. Whenever the category or search term changes, a new API call is made to fetch the relevant news.

### Deployment

- The app is deployed on Firebase Hosting. After deploying, the app can be accessed from any browser, making it available globally.

## Getting Started

### Prerequisites

- Get an API key from [gnews.io](https://gnews.io/).
- Install Node.js and Firebase CLI on your local machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ravijabade12/Aco-News.git
   cd https://github.com/ravijabade12/Aco-News.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file and add your GNews API key:

   ```bash
   VITE_API_KEY=your_api_key_here
   ```

4. Start the application:

   ```bash
   npm run dev
   ```

5. To deploy on Firebase, run:

   ```bash
   firebase deploy
   ```

## Tools & Technologies Used

- **React**: For building the frontend UI.
- **Bootstrap**: For responsive and mobile-first design.
- **GNews API**: To fetch the latest news articles.
- **Firebase**: For hosting the application.

## Future Enhancements

- Add pagination for more articles.
- Include a loading spinner while fetching news articles.
- Implement offline support for reading articles without an internet connection.

## Project Setup

- **API Key**: Make sure you have a valid API key from GNews.
- **Environment Variables**: Add your API key in the `.env` file.
- **Firebase Hosting**: Use Firebase to deploy and access your project live.

## License

This project is open-source and available under the [MIT License](LICENSE).

## Conclusion

This project is a great demonstration of building a news aggregator app using React and the GNews API, with responsive design in mind and hosting it on Firebase for global access.

Happy coding! 🎉
