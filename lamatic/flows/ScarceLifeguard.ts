const flowConfig = {
  "id": "4887fcc1-8a38-4105-b0fa-dae605a1abbf",
  "name": "Slack RAG Bot",
  "nodes": [
    {
      "id": "triggerNode_1",
      "data": {
        "modes": {
          "channelName": "list"
        },
        "nodeId": "slackNode",
        "values": {
          "id": "triggerNode_1",
          "command": "ask",
          "nodeName": "Slack Trigger",
          "channelName": "C08E8M9KWDV",
          "credentials": "Slack OAuth",
          "immediateResponseData": "Loading..."
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
      "id": "RAGNode_555",
      "data": {
        "logic": [],
        "modes": {},
        "nodeId": "RAGNode",
        "values": {
          "id": "RAGNode_555",
          "limit": 10,
          "filters": "",
          "prompts": [
            {
              "id": "187c2f4b-c23d-4545-abef-73dc897d6b7b",
              "role": "system",
              "content": "You are a slack bot trained on documents. You are suppose to answer based on the user's current query and context documents given to you only. "
            },
            {
              "id": "187c2f4b-c23d-4545-abef-73dc897d6b7d",
              "role": "user",
              "content": "CURRENT QUERY : {{triggerNode_1.output.text}}"
            }
          ],
          "memories": "[]",
          "messages": "[]",
          "nodeName": "RAG",
          "vectorDB": [
            "TestDB"
          ],
          "certainty": "0.5",
          "queryField": "{{triggerNode_1.output.text}}",
          "embeddingModelName": {
            "type": "embedder/text",
            "params": {},
            "model_name": "text-embedding-ada-002",
            "credentialId": "0fc2f9ae-4a22-41e3-b63a-3e7db8902a9e",
            "provider_name": "openai",
            "credential_name": "OPENAI_KEY"
          },
          "generativeModelName": [
            {
              "type": "generator/text",
              "params": {},
              "configName": "default",
              "model_name": "gpt-4o-mini",
              "credentialId": "0fc2f9ae-4a22-41e3-b63a-3e7db8902a9e",
              "provider_name": "openai",
              "credential_name": "OPENAI_KEY"
            }
          ]
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
      "id": "slackNode_103",
      "data": {
        "logic": [],
        "modes": {
          "channelName": "list"
        },
        "nodeId": "slackNode",
        "values": {
          "id": "slackNode_103",
          "text": "{{RAGNode_555.output.modelResponse}}",
          "action": "postMessage",
          "nodeName": "Slack",
          "channelName": "C08E8M9KWDV",
          "credentials": "Slack OAuth"
        }
      },
      "type": "dynamicNode",
      "measured": {
        "width": 216,
        "height": 93
      },
      "position": {
        "x": 0,
        "y": 260
      },
      "selected": true
    },
    {
      "id": "plus-node-addNode_683384",
      "data": {
        "nodeId": "addNode",
        "values": {
          "nodeName": ""
        }
      },
      "type": "addNode",
      "measured": {
        "width": 218,
        "height": 100
      },
      "position": {
        "x": 0,
        "y": 390
      }
    }
  ],
  "edges": [
    {
      "id": "triggerNode_1-RAGNode_555",
      "type": "defaultEdge",
      "source": "triggerNode_1",
      "target": "RAGNode_555",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "RAGNode_555-slackNode_103",
      "type": "defaultEdge",
      "source": "RAGNode_555",
      "target": "slackNode_103",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "slackNode_103-plus-node-addNode_683384",
      "type": "defaultEdge",
      "source": "slackNode_103",
      "target": "plus-node-addNode_683384",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    }
  ],
  "status": "active",
  "created_at": "2025-11-04T07:26:30.391529+00:00"
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