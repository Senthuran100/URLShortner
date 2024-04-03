## URL Short Service

Place a .env file under `config` folder and define the following variable.
* PORT - Node js application port to run.
* MONGO_URI -  Database connection URL.
* BASE - Base of the shorturl.


#### Build a Short URL.

`curl --location 'http://localhost:3333/api/short' \
--header 'Content-Type: application/json' \
--data '{
    "origUrl":"https://www.google.com/"
}'`

#### Get the Short URL

`http://localhost:3333/YlrVmrDFiv3jpdBWxSNmo`

