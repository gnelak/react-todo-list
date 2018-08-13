//to import the React library
import React from "react"

const todos = [
    {
        description: 'buy apples',
        isDone: false
    },
    {
        description: 'buy oranges',
        isDone: true
    }
]

class App extends React.Component {
    state = {
        todos: [
            {
                description: 'buy apples',
                isDone: false
            },
            {
                description: 'buy oranges',
                isDone: true
            },
            {
                description: 'have some yoga',
                isDone: true
            }
        ]
    };

    handleTodoClick = (currentTodo) => {
        if (currentTodo.isDone) {
            currentTodo.isDone = false;
        } else {
            currentTodo.isDone = true; 
        }

        const updatedState = {
            todos: this.state.todos
        }

        this.setState(updatedState)
    };

    render() {
        return <div>
            <h1> Get stuff done</h1>
            <ul>
                {this.state.todos.map((a) => {
                    let completeClass = "";

                    if (a.isDone) {
                        completeClass = "complete";
                    }

                    return <li className={completeClass}
                    onClick={() => this.handleTodoClick(a)}>
                    {a.description}</li>
                })}
            </ul>
        </div>

    }
}

//exporting the components called "App"
export default App