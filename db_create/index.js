class Database {
  constructor() {
    this.tables = {};
  }

  createTable(tableName, columns) {
    if (this.tables[tableName]) {
      throw new Error(`Table ${tableName} already exists.`);
    }
    this.tables[tableName] = {
      columns,
      data: [],
    };
  }

  insert(tableName, row) {
    const table = this.tables[tableName];
    if (!table) {
      throw new Error(`Table ${tableName} does not exist.`);
    }

    for (const column of table.columns) {
      if (!(column in row)) {
        throw new Error(`Missing column: ${column}`);
      }
    }

    table.data.push(row);
  }

  select(tableName, conditions = {}) {
    const table = this.tables[tableName];
    if (!table) {
      throw new Error(`Table ${tableName} does not exist.`);
    }

    return table.data.filter((row) => {
      return Object.entries(conditions).every(([column, value]) => {
        return row[column] === value;
      });
    });
  }

  update(tableName, conditions, newValues) {
    const table = this.tables[tableName];
    if (!table) {
      throw new Error(`Table ${tableName} does not exist.`);
    }

    table.data.forEach((row) => {
      const match = Object.entries(conditions).every(([column, value]) => {
        return row[column] === value;
      });

      if (match) {
        Object.assign(row, newValues);
      }
    });
  }

  delete(tableName, conditions) {
    const table = this.tables[tableName];
    if (!table) {
      throw new Error(`Table ${tableName} does not exist.`);
    }

    table.data = table.data.filter((row) => {
      return !Object.entries(conditions).every(([column, value]) => {
        return row[column] === value;
      });
    });
  }

  // SQL Query Executor
  executeSQL(query) {
    const tokens = query.trim().split(/\s+/);
    const command = tokens[0].toUpperCase();

    switch (command) {
      case "CREATE":
        return this.handleCreate(tokens);
      case "INSERT":
        return this.handleInsert(tokens);
      case "SELECT":
        return this.handleSelect(tokens);
      case "UPDATE":
        return this.handleUpdate(tokens);
      case "DELETE":
        return this.handleDelete(tokens);
      default:
        throw new Error(`Unknown command: ${command}`);
    }
  }

  handleCreate(tokens) {
    const tableName = tokens[2];
    const columns = tokens
      .slice(3)
      .map((col) => col.replace(/[,()]/g, "").trim());
    this.createTable(tableName, columns);
  }

  handleInsert(tokens) {
    const tableName = tokens[2];
    const values = tokens
      .slice(4)
      .join(" ")
      .replace(/[\(\)];/g, "")
      .split(",")
      .map((val) => val.trim());
    const row = {};
    const table = this.tables[tableName];

    if (!table) {
      throw new Error(`Table ${tableName} does not exist.`);
    }

    table.columns.forEach((column, index) => {
      row[column] = values[index];
    });

    this.insert(tableName, row);
  }

  handleSelect(tokens) {
    const tableName = tokens[3];
    let conditions = {};
    if (tokens.length > 4 && tokens[4].toUpperCase() === "WHERE") {
      const conditionString = tokens.slice(5).join(" ");
      const conditionsArray = conditionString
        .split("AND")
        .map((cond) => cond.trim());
      conditionsArray.forEach((cond) => {
        const [column, value] = cond.split("=").map((part) => part.trim());
        conditions[column] = value.replace(/['"]/g, ""); // Remove quotes
      });
    }
    return this.select(tableName, conditions);
  }

  handleUpdate(tokens) {
    const tableName = tokens[1];
    const setIndex = tokens.indexOf("SET");
    const whereIndex = tokens.indexOf("WHERE");

    const newValuesString = tokens.slice(setIndex + 1, whereIndex).join(" ");
    const conditionsString = tokens.slice(whereIndex + 1).join(" ");

    const newValuesArray = newValuesString.split(",").map((val) => val.trim());
    const newValues = {};
    newValuesArray.forEach((val) => {
      const [column, value] = val.split("=").map((part) => part.trim());
      newValues[column] = value.replace(/['"]/g, ""); // Remove quotes
    });

    const conditionsArray = conditionsString
      .split("AND")
      .map((cond) => cond.trim());
    const conditions = {};
    conditionsArray.forEach((cond) => {
      const [column, value] = cond.split("=").map((part) => part.trim());
      conditions[column] = value.replace(/['"]/g, ""); // Remove quotes
    });

    this.update(tableName, conditions, newValues);
  }

  handleDelete(tokens) {
    const tableName = tokens[2];
    let conditions = {};
    if (tokens.length > 3 && tokens[3].toUpperCase() === "WHERE") {
      const conditionString = tokens.slice(4).join(" ");
      const conditionsArray = conditionString
        .split("AND")
        .map((cond) => cond.trim());
      conditionsArray.forEach((cond) => {
        const [column, value] = cond.split("=").map((part) => part.trim());
        conditions[column] = value.replace(/['"]/g, ""); // Remove quotes
      });
    }
    this.delete(tableName, conditions);
  }
}

const db = new Database();

// db.executeSQL('INSERT')
