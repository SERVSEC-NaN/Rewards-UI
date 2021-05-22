<h1 align="center"> Rewards' User Interface </h1>

# How to run this project?
```bash
npm install # install node modules
npm run dev # run the project locally
```
After the project is run, go to `localhost:3000` in your browser. If you want to go to the admin page, go to `localhost:3000/admin`, and it will redirect you immediately to the admin page.

# Week 13 Secure Sessions

## 1. Create a simple client interface application
- [x] A layout template with navigation bar (home/login/register or home/account/logout)
- [x] A home page
- [x] A login page
- [x] An account overview page for logged in users
- [x] Allow users to login using the login page
- [ ] Use a service object call to authenticate the user with your API
- [x] Use cookie-based sessions to store the logged in user's username and other non-sensitive account information (e.g., email) between requests
- [x] Allow logged in users to see their account information on an accounts page
- [ ] Allow users to logout by deleting account information from session data in cookie

## 2. Add flash messages for errors and notices
- [ ] Setup the flash plugin for Roda
- [ ] Add a flash message bar to your layout.slim – you may also render it from a separate file
- [ ] Set appropriate class styles for :error and :notice
- [ ] Provide flash notices for form errors and important transitions (e.g., login and unauthorized error)
