# Contributing

- Take a look at the issues section for issues that need to be resolved. 
[Issues](https://github.com/kuurdiii/todoapp/issues) 

- Don't forget to add your personal details to the contributors file! 
[CONTRIBUTORS.md](CONTRIBUTORS.md)


## Local Setup

- Select an issue and ask to be *assigned* to it.

- **Star** and **Fork** the repository.

- Clone ***your forked repository*** on your local machine.
    ```bash
    git clone https://github.com/<your-github-username>/todoapp.git
    ```
    **Replace \<your-github-username\>!** with your github username 


- Before you make any changes to avoid merge conflicts:
    ```bash
    git remote add upstream https://github.com/tusharnankani/ToDoList.git
    git fetch upstream
    git pull upstream master
    git push
    ```

- Checkout to development branch (*name your branch according to the issue name*).
    ```bash
    git checkout -b <branch-name>
    ```

- Create a folder in the projects directory according to the issue name.

- Write your code, locally.

- Add the changes:
    ```bash
    git add -A
    git commit -m "<your message>"
    ```

- Push the code *to your repository*.

    ```bash
    git push origin <branch-name>
    ```

- Go to the GitHub page of YOUR FORK, and **make a pull request**


- Now wait, until one of us *reviews your Pull Request*! If there are any conflicts, you'll be notified!
