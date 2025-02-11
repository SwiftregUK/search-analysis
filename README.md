# Search analyzer

A graphical user interface for the [Elasticsearch Analyze API](https://www.elastic.co/guide/en/elasticsearch/reference/current/indices-analyze.html)

See the [Elasticsearch configuration section](#elasticsearch-configuration) below for important setup information

![Preview](/docs/demo.gif?raw=true)

---

### Usage
This tool allows you to test an analyzer in 4 steps:
 1. Enter the URL of your Elasticsearch node
 2. Select an analyzer
 3. Enter your input text
 4. Click the "Analyze" button to view the generated terms


### Other workflows

#### Analyze by Field
 1. Enter the URL of your Elasticsearch node
 2. Refresh the index list and select an index name
 3. Open the "By Field" tab
 4. Select a field in your index to use that field's analyzer
 5. Enter your input text
 6. Click the "Analyze" button to view the generated terms

#### Custom tokenizer/fiilters
 1. Enter the URL of your Elasticsearch node
 2. Open the "Custom" tab
 3. Select a [tokenizer](https://www.elastic.co/guide/en/elasticsearch/reference/current/analysis-tokenizers.html) 
 4. Select zero or more [token filters](https://www.elastic.co/guide/en/elasticsearch/reference/current/analysis-tokenfilters.html) 
 5. Enter your input text
 6. Click the "Analyze" button to view the generated terms
---
## Elasticsearch Configuration

This tool needs to have http access to an Elasticsearch node. Elasticsearch security configuration needs to be relaxed to allow cross-domain requests and to allow non-https requests.

Below are the most-permisive `elasticsearch.yaml` [settings](https://www.elastic.co/guide/en/elasticsearch/reference/current/settings.html). Do not use these values in a production cluster.

Disabling ssl might not be necessary if you don't intend to clone, build, and host this repo locally.

```yml
xpack.security.http.ssl:
  enabled: false

http.host: 0.0.0.0
http.cors.enabled: true
http.cors.allow-origin: '*'
```
