
const TodolistItems = ({ todos, onToggle, onDelete }) => {
    return (
        <div className="todolistItems">
            <h3>할 일 목록</h3>
            {todos.length === 0 ? (
                <div>할 일 목록이 없습니다.</div>
            ) : (
            <ul>
                {
                    todos.map((todo, index) => {
                        return (
                            <li key={index}>
                                <input
                                    type="checkbox"
                                    checked={todo.isCompleted}
                                    onChange={() => {
                                        onToggle(todo.id);
                                    }}
                                />
                                <span className={todo.isCompleted ? "completed" : ""}>
                                    {todo.text}
                                </span>
                                <button
                                    onClick={() => {
                                        onDelete(todo.id);
                                    }}>
                                    삭제
                                </button>
                            </li>
                        );
                    })
                }
            </ul>
            )}
        </div>
    );
}

export default TodolistItems;
