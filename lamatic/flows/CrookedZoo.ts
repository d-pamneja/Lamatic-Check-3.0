const flowConfig = {
  "id": "f5dfbdf8-0e08-40f9-9ff2-1091399afc51",
  "name": "Crooked Zoo",
  "nodes": [
    {
      "id": "triggerNode_1",
      "data": {
        "nodeId": "graphqlNode",
        "values": {
          "nodeName": "API Request",
          "responeType": "realtime",
          "advance_schema": "{\n  \"urls\": \"[string]\"\n}"
        },
        "trigger": true
      },
      "type": "triggerNode",
      "measured": {
        "width": 216,
        "height": 93
      },
      "position": {
        "x": 0,
        "y": 0
      },
      "selected": false
    },
    {
      "id": "firecrawlNode_785",
      "data": {
        "logic": [],
        "modes": {
          "webhook": "list"
        },
        "nodeId": "firecrawlNode",
        "values": {
          "id": "firecrawlNode_785",
          "url": "",
          "mode": "syncBatchScrape",
          "urls": "{{triggerNode_1.output.urls}}",
          "delay": 0,
          "limit": 10,
          "mobile": false,
          "search": "",
          "timeout": 30000,
          "waitFor": 2000,
          "nodeName": "Firecrawl",
          "crawlDepth": 1,
          "crawlLimit": 10,
          "credentials": "FIRECRAWL_API_KEY",
          "excludePath": [],
          "excludeTags": [],
          "includePath": [],
          "includeTags": [],
          "sitemapOnly": false,
          "crawlSubPages": false,
          "ignoreSitemap": false,
          "webhookEvents": [
            "completed",
            "failed",
            "page",
            "started"
          ],
          "changeTracking": false,
          "webhookHeaders": "",
          "onlyMainContent": true,
          "webhookMetadata": "",
          "includeSubdomains": false,
          "maxDiscoveryDepth": 1,
          "allowBackwardLinks": false,
          "allowExternalLinks": false,
          "skipTlsVerification": false,
          "ignoreQueryParameters": true
        }
      },
      "type": "dynamicNode",
      "measured": {
        "width": 216,
        "height": 93
      },
      "position": {
        "x": 0,
        "y": 130
      },
      "selected": false
    },
    {
      "id": "forLoopNode_370",
      "data": {
        "modes": {},
        "nodeId": "forLoopNode",
        "values": {
          "wait": 0,
          "endValue": "10",
          "nodeName": "Loop",
          "increment": "1",
          "connectedTo": "forLoopEndNode_301",
          "iterateOver": "list",
          "initialValue": "0",
          "iteratorValue": "{{firecrawlNode_785.output.data}}"
        }
      },
      "type": "forLoopNode",
      "measured": {
        "width": 216,
        "height": 93
      },
      "position": {
        "x": 0,
        "y": 260
      }
    },
    {
      "id": "forLoopEndNode_301",
      "data": {
        "modes": {},
        "nodeId": "forLoopEndNode",
        "values": {
          "nodeName": "Loop End",
          "connectedTo": "forLoopNode_370"
        }
      },
      "type": "forLoopEndNode",
      "measured": {
        "width": 216,
        "height": 93
      },
      "position": {
        "x": 0,
        "y": 1170
      }
    },
    {
      "id": "variablesNode_658",
      "data": {
        "modes": {},
        "nodeId": "variablesNode",
        "values": {
          "mapping": "{\n  \"title\": {\n    \"type\": \"string\",\n    \"value\": \"{{forLoopNode_370.output.currentValue.metadata.title}}\"\n  },\n  \"description\": {\n    \"type\": \"string\",\n    \"value\": \"{{forLoopNode_370.output.currentValue.metadata.description}}\"\n  },\n  \"source\": {\n    \"type\": \"string\",\n    \"value\": \"{{forLoopNode_370.output.currentValue.metadata.url}}\"\n  }\n}",
          "nodeName": "Variables"
        }
      },
      "type": "dynamicNode",
      "measured": {
        "width": 216,
        "height": 93
      },
      "position": {
        "x": 0,
        "y": 390
      }
    },
    {
      "id": "chunkNode_968",
      "data": {
        "modes": {},
        "nodeId": "chunkNode",
        "values": {
          "nodeName": "Chunking",
          "chunkField": "{{forLoopNode_370.output.currentValue.markdown}}",
          "numOfChars": 500,
          "separators": [
            "\n\n",
            "\n",
            " "
          ],
          "chunkingType": "recursiveCharacterTextSplitter",
          "overlapChars": 50
        }
      },
      "type": "dynamicNode",
      "measured": {
        "width": 216,
        "height": 93
      },
      "position": {
        "x": 0,
        "y": 520
      }
    },
    {
      "id": "codeNode_794",
      "data": {
        "modes": {},
        "nodeId": "codeNode",
        "values": {
          "code": "let docs = {{ chunkNode_968.output.chunks }};\n\nlet outputDocs = docs.map((doc) => doc.pageContent)\n\nreturn outputDocs",
          "nodeName": "Extract Chunks"
        }
      },
      "type": "dynamicNode",
      "measured": {
        "width": 216,
        "height": 93
      },
      "position": {
        "x": 0,
        "y": 650
      }
    },
    {
      "id": "vectorizeNode_314",
      "data": {
        "logic": [],
        "modes": {},
        "nodeId": "vectorizeNode",
        "values": {
          "id": "vectorizeNode_314",
          "nodeName": "Vectorize",
          "inputText": "{{codeNode_794.output}}",
          "embeddingModelName": {
            "type": "embedder/text",
            "params": {},
            "model_name": "text-embedding-ada-002",
            "credentialId": "0fc2f9ae-4a22-41e3-b63a-3e7db8902a9e",
            "provider_name": "openai",
            "credential_name": "OPENAI_KEY"
          }
        }
      },
      "type": "dynamicNode",
      "measured": {
        "width": 216,
        "height": 93
      },
      "position": {
        "x": 0,
        "y": 780
      },
      "selected": false
    },
    {
      "id": "codeNode_305",
      "data": {
        "modes": {},
        "nodeId": "codeNode",
        "values": {
          "code": "let vectors = {{ vectorizeNode_314.output.vectors }};\nlet metadataProps = [];\nlet texts = {{codeNode_794.output}};\n\nfor (const idx in vectors) {\n  let metadata = {}\n  metadata[\"content\"] = texts[idx];\n  metadata[\"title\"] = {{variablesNode_658.output.title}};\n  metadata[\"description\"] = {{variablesNode_658.output.description}};\n  metadata[\"source\"] = {{variablesNode_658.output.source}};\n  metadataProps.push(metadata)\n};\n\noutput = { \"metadata\": metadataProps, \"vectors\": vectors }",
          "nodeName": "Transform Metadata"
        }
      },
      "type": "dynamicNode",
      "measured": {
        "width": 216,
        "height": 93
      },
      "position": {
        "x": 0,
        "y": 910
      }
    },
    {
      "id": "vectorNode_157",
      "data": {
        "logic": [],
        "modes": {},
        "nodeId": "vectorNode",
        "values": {
          "id": "vectorNode_157",
          "limit": 20,
          "action": "index",
          "filters": "",
          "nodeName": "Index",
          "vectorDB": "TestDB",
          "primaryKeys": [
            "title"
          ],
          "vectorsField": "{{codeNode_305.output.vectors}}",
          "metadataField": "{{codeNode_305.output.metadata}}",
          "duplicateOperation": "overwrite"
        }
      },
      "type": "dynamicNode",
      "measured": {
        "width": 216,
        "height": 93
      },
      "position": {
        "x": 0,
        "y": 1040
      },
      "selected": false
    },
    {
      "id": "graphqlResponseNode_532",
      "data": {
        "logic": [],
        "nodeId": "graphqlResponseNode",
        "values": {
          "nodeName": "API Response",
          "outputMapping": "{\n  \"output\": \"Records indexed successfully\"\n}"
        }
      },
      "type": "dynamicNode",
      "measured": {
        "width": 216,
        "height": 93
      },
      "position": {
        "x": 0,
        "y": 1300
      },
      "selected": true
    }
  ],
  "edges": [
    {
      "id": "triggerNode_1-firecrawlNode_785",
      "type": "defaultEdge",
      "source": "triggerNode_1",
      "target": "firecrawlNode_785",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "firecrawlNode_785-forLoopNode_370",
      "type": "defaultEdge",
      "source": "firecrawlNode_785",
      "target": "forLoopNode_370",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "forLoopNode_370-variablesNode_658",
      "data": {
        "condition": "Loop Start",
        "invisible": true
      },
      "type": "conditionEdge",
      "source": "forLoopNode_370",
      "target": "variablesNode_658",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "vectorNode_157-forLoopEndNode_301",
      "type": "defaultEdge",
      "source": "vectorNode_157",
      "target": "forLoopEndNode_301",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "variablesNode_658-chunkNode_968",
      "type": "defaultEdge",
      "source": "variablesNode_658",
      "target": "chunkNode_968",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "chunkNode_968-codeNode_794",
      "type": "defaultEdge",
      "source": "chunkNode_968",
      "target": "codeNode_794",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "codeNode_794-vectorizeNode_314",
      "type": "defaultEdge",
      "source": "codeNode_794",
      "target": "vectorizeNode_314",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "vectorizeNode_314-codeNode_305",
      "type": "defaultEdge",
      "source": "vectorizeNode_314",
      "target": "codeNode_305",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "codeNode_305-vectorNode_157",
      "type": "defaultEdge",
      "source": "codeNode_305",
      "target": "vectorNode_157",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "forLoopEndNode_301-graphqlResponseNode_532",
      "type": "defaultEdge",
      "source": "forLoopEndNode_301",
      "target": "graphqlResponseNode_532",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "forLoopNode_370-forLoopEndNode_301",
      "data": {
        "condition": "Loop",
        "invisible": false
      },
      "type": "loopEdge",
      "source": "forLoopNode_370",
      "target": "forLoopEndNode_301",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "forLoopEndNode_301-forLoopNode_370",
      "data": {
        "condition": "Loop",
        "invisible": true
      },
      "type": "loopEdge",
      "source": "forLoopEndNode_301",
      "target": "forLoopNode_370",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "response-graphqlResponseNode_532",
      "type": "responseEdge",
      "source": "triggerNode_1",
      "target": "graphqlResponseNode_532",
      "sourceHandle": "to-response",
      "targetHandle": "from-trigger"
    }
  ],
  "status": "active",
  "created_at": "2025-11-04T07:24:17.233941+00:00"
};

export async function getNodesAndEdges(): Promise<{
    nodes: Record<string, any>[],
    edges: Record<string, any>[],
}> {
    return {
        nodes: flowConfig.nodes,
        edges: flowConfig.edges,
    }
}

export async function getFlowConfig(): Promise<Record<string, any>> {
    return flowConfig;
}