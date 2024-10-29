# Agricultural Market Price Tracker

## Overview

The **Agricultural Market Price Tracker** is a RESTful API designed to help users track real-time prices of agricultural products. It allows users to compare prices across different markets, set up alerts for price changes, and view historical price data. This project serves as an educational tool and showcases the application of back-end development skills in a real-world scenario.

## Features

- **User Authentication**: Register and log in securely using token-based authentication.
- **Product Price Tracking**: Retrieve real-time prices for various agricultural products.
- **Market Comparison**: Compare prices across different markets for selected products.
- **Price Alerts**: Set up alerts to notify users via email or SMS when prices reach specified thresholds.
- **Historical Price Data**: Access and analyze historical price trends for informed decision-making.

## Technologies Used

- **Back-end**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **Notifications**: Twilio (for SMS), SendGrid (for email)
- **Environment Management**: dotenv

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB instance (local or cloud).
- Twilio account (for SMS notifications).
- SendGrid account (for email notifications).

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/agricultural-market-price-tracker.git
   cd agricultural-market-price-tracker

