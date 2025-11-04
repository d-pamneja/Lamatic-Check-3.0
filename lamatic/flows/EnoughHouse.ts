const flowConfig = {
  "id": "b0343abc-d6c3-409e-8680-63b7cfce0604",
  "name": "Agent Reasoning - Generate",
  "nodes": [
    {
      "id": "LLMNode_168",
      "data": {
        "modes": {},
        "nodeId": "LLMNode",
        "values": {
          "id": "LLMNode_168",
          "tools": [],
          "prompts": [
            {
              "id": "187c2f4b-c23d-4545-abef-73dc897d6b7b",
              "role": "system",
              "content": "You are an **AI Expert Editor**.  \nYou will be given:\n\n1. A **user query**\n2. A collection of **search results (research contexts)**\n\nYour job is to produce a **final markdown-formatted answer**.\n\n### Strict Formatting Rules:\n\n* Use **Markdown heading syntax only**:  \n   * `#` for the main title (Overview or the main subject).  \n   * `##` for section headings (e.g., Early Life, Career, etc.).  \n   * `###` for sub-sections if needed.\n* Do **not** use underlines (`---` or `===`) for headings.\n* Structure the answer like a clean, well-written article or blog post.\n* Leave blank lines or space by adding `\\n` and making sure it's formatted well and evenly spaced.\n* Embed links inline using `[Title](URL)` — never raw links.\n* Base the **main content ONLY on search results**.\n* Make sure your final answer is a proper well edited blog with proper spacing in markdown format which can be displayed as it is.\n* Make sure you have referenced each link you use in your answer properly.\n\n### Example Skeleton (must follow this structure)\n\n```\n# Main Topic Title\n\n## Section 1 Title\nContent with inline references like [Wikipedia](https://wikipedia.org).\n\n## Section 2 Title\nContent here with more references.\n\n...\n```\n\n### Output Rules:\n\n* The output must always be in **valid markdown** (not JSON).\n* The supervisor will wrap your answer in JSON later, so you only need to output markdown"
            },
            {
              "id": "187c2f4b-c23d-4545-abef-73dc897d6b7d",
              "role": "user",
              "content": "QUERY : {{triggerNode_1.output.query}}\n\nRESEARCH : {{triggerNode_1.output.research}}"
            }
          ],
          "memories": "[]",
          "messages": "[]",
          "nodeName": "Generate Text",
          "attachments": "",
          "credentials": "",
          "generativeModelName": {
            "type": "generator/text",
            "params": {},
            "model_name": "gpt-4o-2024-08-06",
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
          "nodeName": "API Request",
          "responeType": "realtime",
          "advance_schema": "{\n  \"query\": \"string\",\n  \"research\": [\n    [\n      {\n        \"title\": \"string\",\n        \"link\": \"string\",\n        \"snippet\": \"string\",\n        \"date\": \"string\",\n        \"position\": \"string\"\n      }\n    ]\n  ]\n}"
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
          "headers": "{\"content-type\":\"application/json\"}",
          "retries": "0",
          "nodeName": "API Response",
          "webhookUrl": "",
          "retry_delay": "0",
          "outputMapping": "{\n  \"answer\": \"{{LLMNode_168.output.generatedResponse}}\"\n}"
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
      "id": "triggerNode_1-LLMNode_168",
      "type": "defaultEdge",
      "source": "triggerNode_1",
      "target": "LLMNode_168",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "LLMNode_168-responseNode_triggerNode_1",
      "type": "defaultEdge",
      "source": "LLMNode_168",
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
  "created_at": "2025-11-04T16:58:14.420622+00:00"
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