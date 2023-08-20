# docker/ignore

## Summary

Adds **.dockerignore** file and manages it through values

# JSON Schema

## Properties

- **`docker`** *(object)*: Docker namespace.
  - **`ignore`** *(array, required)*: List of files or folders to add into .dockerignore file.
    - **Items** *(string)*: Single line/entry in .dockerignore file.
## Examples

  ```yaml
  docker:
      ignore:
      - node_modules
      - .DS_Store
  ```


