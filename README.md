🚀 How to Run Locally

1. Clone the Repository
   git clone https://github.com/ezzarali906/shezlong-repo.git
   cd shezlong-repo
2. Install Dependencies
   npm install
3. Configure Environment
   Edit src/app.module.ts to configure your MySQL DB connection:
   TypeOrmModule.forRoot({
   type: 'mysql',
   host: 'localhost',
   port: 3306,
   username: 'root',
   password: 'your_password',
   database: 'shezlong',
   autoLoadEntities: true,
   synchronize: true,
   }),
4. Run the App
   npm run start:dev
