<h1 align="center"> Rewards' UI Objectives </h1>

# 1. Pages
- [x] Main page
- [x] Administrators login page
  - [x] Login form
    - [x] Email input bar
    - [x] Password input bar
    - [x] Login button
    - [x] Send the email and password in JSON format to API
- [ ] Admin dashboard
  - [ ] Promotions dashboard
    - [ ] Show admin information  
    - [ ] Table
    - [ ] Edit button
    - [ ] Select/select all button
    - [ ] Delete button
    - [ ] Split data into multiple pages
  - [ ] Promoters dashboard
    - [ ] Show admin information 
    - [ ] Table
    - [ ] Edit button
    - [ ] Select/select all button
    - [ ] Delete button
    - [ ] Split data into multiple pages
  - [ ] Tags dashboard
    - [ ] Show admin information 
    - [ ] Table
    - [ ] Edit button
    - [ ] Select/select all button
    - [ ] Delete button
    - [ ] Split data into multiple pages
  - [ ] Subscribers dashboard
    - [ ] Show admin information 
    - [ ] Table
    - [ ] Edit button
    - [ ] Select/select all button
    - [ ] Delete button
    - [ ] Split data into multiple pages
  - [ ] Subscriptions dashboard
    - [ ] Show admin information 
    - [ ] Table
    - [ ] Edit button
    - [ ] Select/select all button
    - [ ] Delete button
    - [ ] Split data into multiple pages
- [x] Subscribers login page
  - [ ] Form
    - [ ] Subscribers phone number
    - [ ] Login button
- [x] Choose user type login page
- [ ] Business-owner dashboard

# 2. API
- [ ] Create a secure channel between front-end side and back-end server
- [ ] Be able to receive token from data base after authentications

# 3. Security
- [ ] Reroute admin to login page if not yet signed in for administrators
- [ ] Reroute admin to dashboard if signed in for administrators
- [ ] Reroute admin to login page if not yet signed in for subscribers
- [ ] Reroute admin to dashboard if signed in for subscribers
- [ ] Reroute admin to login page if not yet signed in for business owners
- [ ] Reroute admin to dashboard if signed in for business owners
- [ ] Prevent non administrators to login to admin dashboard
- [ ] Be able to do hash tokens received after authentications
- [ ] Store subscribers' tokens in a cache