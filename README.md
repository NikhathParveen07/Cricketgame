# 🏏 Bat Ball Stump Game

A fun and simple web-based cricket-themed game inspired by "Rock Paper Scissors", built using **HTML, CSS, and JavaScript**.

## 🎮 How to Play

- Click one of the buttons: **Bat**, **Ball**, or **Stump**.
- The computer will randomly choose its move.
- The winner is decided based on cricket-style rules:
  - **Bat beats Ball**
  - **Ball beats Stump**
  - **Stump beats Bat**
- Your score will be updated based on the result.
- Click the **Reset** button to clear your score and start fresh.

## 🧠 Game Rules

| User Move | Computer Move | Result        |
|-----------|----------------|----------------|
| Bat       | Ball           | You Win        |
| Bat       | Stump          | Computer Wins  |
| Ball      | Stump          | You Win        |
| Ball      | Bat            | Computer Wins  |
| Stump     | Bat            | You Win        |
| Stump     | Ball           | Computer Wins  |
| Same Move | Same Move      | It's a Tie     |

## 💾 Features

- 🔁 Random move generation for computer
- 📊 Score tracking using `localStorage`
- 🎯 Clear winner logic
- 🧹 Score reset functionality
- 🎨 Simple and responsive UI

