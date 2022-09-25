import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class DataService implements InMemoryDbService {
  constructor() {}

  createDb() {
    let quizzes: any = [
      {
        id: 1,
        title: 'Software Engineering Mastery Quiz',
        author: 'TechAcademy',
        description:
          'Test your software engineering knowledge with this comprehensive quiz. Covers algorithms, data structures, design patterns, and software development methodologies.',
        imgUrl:
          'https://plus.unsplash.com/premium_photo-1682088318236-8c4958076b34?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        quantity: 300,
        price: 15.99,
        cart: 0,
      },
      {
        id: 2,
        title: 'Marketing Strategy Quiz',
        author: 'Marketing Experts',
        description:
          'Challenge your marketing skills with questions on marketing strategies, consumer behavior, digital marketing, and branding techniques. Perfect for both beginners and pros.',
        imgUrl:
          'https://images.unsplash.com/photo-1624555130581-1d9cca783bc0?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        quantity: 150,
        price: 12.5,
        cart: 0,
      },
      {
        id: 3,
        title: 'Finance and Accounting Fundamentals Quiz',
        author: 'FinanceWorld',
        description:
          'Evaluate your understanding of finance, accounting principles, budgeting, financial statements, and investment strategies with this engaging quiz.',
        imgUrl:
          'https://plus.unsplash.com/premium_photo-1661418553375-5ea448f11f34?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        quantity: 200,
        price: 14.99,
        cart: 0,
      },
      {
        id: 4,
        title: 'Project Management Essentials Quiz',
        author: 'PM Professionals',
        description:
          'A quiz designed for aspiring and seasoned project managers. Topics include project planning, risk management, Agile methodologies, and leadership.',
        imgUrl:
          'https://images.unsplash.com/photo-1542626991-cbc4e32524cc?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        quantity: 180,
        price: 16.0,
        cart: 0,
      },
      {
        id: 5,
        title: 'Data Science and Machine Learning Quiz',
        author: 'DataGurus',
        description:
          'Test your knowledge of data science, machine learning algorithms, and data analytics. A perfect challenge for data enthusiasts and professionals.',
        imgUrl:
          'https://plus.unsplash.com/premium_photo-1682756540097-6a887bbcf9b0?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        quantity: 130,
        price: 19.99,
        cart: 0,
      },
      {
        id: 6,
        title: 'Digital Marketing Expert Quiz',
        author: 'DigitalMark',
        description:
          'Improve your digital marketing know-how with this quiz covering SEO, PPC, content marketing, social media strategies, and analytics.',
        imgUrl:
          'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        quantity: 110,
        price: 13.99,
        cart: 0,
      },
      {
        id: 7,
        title: 'Entrepreneurship and Startup Quiz',
        author: 'StartupCoaches',
        description:
          'Aspiring entrepreneurs, this one’s for you. Test your knowledge on startup strategies, business models, funding, and scaling in this quiz.',
        imgUrl:
          'https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        quantity: 90,
        price: 18.5,
        cart: 0,
      },
      {
        id: 8,
        title: 'Human Resource Management Quiz',
        author: 'HRAcademy',
        description:
          'Explore your understanding of HR practices, employee management, organizational behavior, and recruitment strategies with this quiz.',
        imgUrl:
          'https://images.unsplash.com/photo-1459499362902-55a20553e082?q=80&w=1910&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        quantity: 200,
        price: 11.99,
        cart: 0,
      },
    ];

    let quizzesCart: any = [];

    return { quizzes, quizzesCart };
  }
}
