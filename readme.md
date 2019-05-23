Install:

    1. yarn
    
Run locally:

    1. Run npm run start command to enable devserver with Hot Module Replacement

Build:

    There are two npm tasks to run:
        1. build:dev - without optimize
        2. build:prod - with optimize
    After successful build you can check deploy package in dist dir

Project structure:

    /app - application files
       | - /actions - action creators, and action types
       | - /components - pure components, not connected to store to be reusable
       | - /containers - containers connected to store, containers propagate store changes to components
       | - /models - models
       | - /queries - graphql queries
       | - /reducers - reducers - pure functions which, get action as parameter and return new version of store
       | - /utils - utils
    /dist - bundle with application ready to deploy to server
    /public - static files
       | - /img - images
       | - /styles - css
    /stub - stubs for flow

