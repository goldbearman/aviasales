import React, { Component } from "react";

import "./app.css";

const App = () => {

  return (
    <section className="todoapp">
      <header className="header">
      </header>
      <section className="main">
        <TaskList
          todos={this.showItems(this.state.todoData)}
          onDeleted={this.deleteItem}
          onToggleDone={this.onToggleDone}
        />
        <Footer
          toDo={toDo}
          filterActiveFooter={this.filterActive}
          filter={this.state.filter}
          clearCompleted={this.clearCompleted}
        />
      </section>
    </section>
  );
}

export default App;
