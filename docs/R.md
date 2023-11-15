# R Notes

- `paste()` -> string concatenation
- `fread()` -> returns `data.table`
- `%>%` -> pipe operator
  - Example: `data %>% head() %>% summary()` is the same as `summary(head(data))` 
- `mutate()`
  - `mutate(data_table, column_name = value)` -> set column value, if column does not exist, it will be created
- `rbind()` -> bind rows - similar to `UNION` in SQL
  - Note: The number of columns must match.
