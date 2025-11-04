const flowConfig = {
  "id": "95236a11-3502-460c-8e6e-3900024b90a3",
  "name": "Agentic Reasoning - Steps",
  "nodes": [
    {
      "id": "LLMNode_680",
      "data": {
        "modes": {},
        "nodeId": "LLMNode",
        "values": {
          "id": "LLMNode_680",
          "tools": [],
          "prompts": [
            {
              "id": "187c2f4b-c23d-4545-abef-73dc897d6b7b",
              "role": "system",
              "content": "You are a Supervisor Agent step builder. For every user query, respond only with a single, simple paragraph in first person that explains what you are going to do to solve the query.\n\n---\n\n**Rules**\n\n* Always write in first person (e.g., “I will first check…”, “Then I’ll gather…”).\n* Keep it natural, concise, and readable (2–5 sentences).\n* Do not give the actual answer — only describe the process.\n* Mention that you will search, review information, and then prepare a structured final response.\n* If the query is related to the previous one, note that you’ll build on it. If not, note that you’ll treat it as new.\n* If you are given history, always assume it is relevant and the current query is connected to the last one.\n* **Explicitly restate the past topics, entities, or context (as nouns) that the user is referring to before describing your next steps, so the research team can follow.**\n* Make sure that you mention these past references naturally in your process description.\n\n---\n\n**Example with New Query**\n\nUser Query: How should I pack for my Jaipur trip next week?  \nStep-Thinking Output:  \n\"I’ll start by checking the latest weather forecast for Jaipur next week and looking into reliable travel resources on what to pack for that climate. Then I’ll gather advice on cultural considerations and common travel essentials to make sure nothing important is missed. Finally, I’ll organize everything into a clear guide so you know exactly what to bring for your trip.\"\n\n**Example with history**\n\nPrevious Query: Compare leather sofas vs fabric sofas\n\nAssistant Answer : Leather vs Fabric Sofas: A Comprehensive Comparison Choosing between....  \nCurrent Query: _How about cotton sofas compared to those two?_  \nStep-Thinking Output:  \n\"Since you mentioned sofa materials for durability earlier and are now asking specifically about cotton sofas compared to the other two materials we discussed (i.e. leather and fabric), I will start by reviewing the key properties of cotton as a sofa material. Then, I’ll compare those properties with the two previously mentioned materials in terms of durability, comfort, and maintenance. Finally, I’ll organize this into a structured comparison so you can clearly see how cotton stacks up against the leather and fabric sofas\""
            },
            {
              "id": "187c2f4b-c23d-4545-abef-73dc897d6b7d",
              "role": "user",
              "content": "USER QUERY : {{triggerNode_1.output.query}}"
            }
          ],
          "memories": "[]",
          "messages": "{{triggerNode_1.output.history}}",
          "nodeName": "Generate Text",
          "attachments": "",
          "credentials": "",
          "generativeModelName": {
            "type": "generator/text",
            "params": {},
            "model_name": "gpt-4o-mini",
            "credentialId": "6d70d145-9f23-4e29-b984-98ece28c56fd",
            "provider_name": "openai",
            "credential_name": "LAMATIC_OPENAI_API_KEY"
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
        "y": 130
      },
      "draggable": false
    },
    {
      "id": "triggerNode_1",
      "data": {
        "modes": {},
        "nodeId": "graphqlNode",
        "values": {
          "id": "triggerNode_1",
          "headers": "",
          "retries": "0",
          "nodeName": "API Request",
          "webhookUrl": "",
          "responeType": "realtime",
          "retry_deplay": "0",
          "advance_schema": "{\n  \"query\": \"string\",\n  \"history\": [\n    {\n      \"role\": \"string\",\n      \"message\": \"string\"\n    }\n  ]\n}"
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
      }
    },
    {
      "id": "responseNode_triggerNode_1",
      "data": {
        "modes": {},
        "nodeId": "graphqlResponseNode",
        "values": {
          "id": "responseNode_triggerNode_1",
          "nodeName": "API Response",
          "outputMapping": "{\n  \"steps\": \"{{LLMNode_680.output.generatedResponse}}\"\n}"
        }
      },
      "type": "responseNode",
      "measured": {
        "width": 216,
        "height": 93
      },
      "position": {
        "x": 0,
        "y": 260
      }
    }
  ],
  "edges": [
    {
      "id": "triggerNode_1-LLMNode_680",
      "type": "defaultEdge",
      "source": "triggerNode_1",
      "target": "LLMNode_680",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "LLMNode_680-responseNode_triggerNode_1",
      "type": "defaultEdge",
      "source": "LLMNode_680",
      "target": "responseNode_triggerNode_1",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "response-responseNode_triggerNode_1",
      "type": "responseEdge",
      "source": "triggerNode_1",
      "target": "responseNode_triggerNode_1",
      "sourceHandle": "to-response",
      "targetHandle": "from-trigger"
    }
  ],
  "status": "active",
  "created_at": "2025-11-04T16:43:37.779036+00:00"
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