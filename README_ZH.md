# lighthouse-apm

[English](./README.md)

远程执行lighthouse，用于对页面的性能等体验进行分析和评分。基于puppeteer、lighthouse、graphql、apollo、react hooks

# 效果

<img src="https://raw.githubusercontent.com/brizer/graph-bed/master/img/Feb-02-2021%2010-07-41.gif"/>


# 私有化部署

git clone后。

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

既可本地启动

# 需要做的工作

提供更多查询条件和定制后续功能（如host、直邮、定时任务等等）