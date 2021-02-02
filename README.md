# lighthouse-apm

[中文文档](./README_ZH.md)

Remotely execute the lighthouse to analyze and score the performance of the page. Based on puppeteer, lighthouse, graphql, apollo, react hooks

# Example

<img src="https://raw.githubusercontent.com/brizer/graph-bed/master/img/Feb-02-2021%2010-07-41.gif"/>


# Privatization deployment

After git clone,

``` bash
cd server 
npm install
npm run build
```

``` bash
cd client
npm install
npm run build
```

``` bash
docker-compose up -d
```

Then you can launch locally.

# To do 

Provide more query conditions and customized follow-up functions (such as host, direct mail, scheduled tasks, etc.)