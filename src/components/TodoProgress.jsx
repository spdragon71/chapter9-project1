
const TodoProgress = ({ todos }) => {
    const completedTodos = todos.filter((todo) => todo.isCompleted);
    const completedCount = completedTodos.length;
    const allCount = todos.length;
    const progressRate = (completedCount / allCount) * 100;

    return (
        <div className="todoProgress">
            <div>{completedCount} / {allCount}</div>
            <progress value={progressRate} max="100" />
            <div>{Math.floor(progressRate)}%</div>
        </div>
    );
}

export default TodoProgress;