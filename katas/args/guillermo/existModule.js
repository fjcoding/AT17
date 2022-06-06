export function existInSchema (schema, alias) {
    return schema.find(element => element.alias == alias);
}