const flowConfig = {
  "id": "95236a11-3502-460c-8e6e-3900024b90a3",
  "name": "Agentic Reasoning - Steps",
  "nodes": [
    {
      "id": "sticky-note-609",
      "data": {
        "modes": {},
        "width": 479,
        "height": 167,
        "nodeId": "stickyNoteNode",
        "values": {
          "id": "sticky-note-609",
          "text": "### **⚡️ Flow Trigger**\n\n---\n\n### _A trigger initiates the flow. It can be a built-in tool or an integration with an external application._\n\n### Trigger Types:\n\n1. **📱App** \\- Initiate flow from an external application integration\n2. **🔌 Interface** \\- API / Webhook\n3. **💬 Widget** \\- Prebuilt UI component ( Chat, Search )\n\n---\n\n### 📖 Read Docs - [Flows](https://lamatic.ai/docs/flows)",
          "color": "purple",
          "nodeId": "stickyNoteNode",
          "nodeName": "Sticky Note",
          "nodeType": "stickyNoteNode"
        }
      },
      "type": "stickyNoteNode",
      "dragging": false,
      "measured": {
        "width": 479,
        "height": 167
      },
      "position": {
        "x": -580.8636972512107,
        "y": -76.11143938411305
      },
      "selected": false,
      "draggable": true
    },
    {
      "id": "sticky-qnyx8cr1s",
      "data": {
        "modes": {},
        "nodeId": "stickyNoteNode",
        "values": {
          "id": "sticky-qnyx8cr1s",
          "text": "# **▶️ Try it out**\n\n---\n\n1. Chat Widget trigger allows you to run a flow whenever a users sends a message.  \n**🎨Customize Chat Widget appearance and behaviour inside the chat widget node**\n2. 🛠️ Configure AI Node for text Generation  \n_AI Nodes allows you to generate content and reasoning with LLMs_  \n   1. **⚙️Setup Model**  \n   2. **✍🏻Configure Prompt**  \n   3. ▶️**Test AI Node**\n3. ➕ Map the output to the chat response\n4. Run flow by clicking\n\n# ▶️ **Test 👇🏻**\n\n1. Find Setup instructions to embed this widget on your website",
          "color": "yellow",
          "nodeId": "stickyNoteNode",
          "nodeName": "Sticky Note",
          "nodeType": "stickyNoteNode"
        }
      },
      "type": "stickyNoteNode",
      "measured": {
        "width": 220,
        "height": 200
      },
      "position": {
        "x": -1261.9901229436189,
        "y": -60.90517108764308
      },
      "draggable": true
    },
    {
      "id": "sticky-kzv63mb30",
      "data": {
        "modes": {},
        "nodeId": "stickyNoteNode",
        "values": {
          "id": "sticky-kzv63mb30",
          "text": "# **💬 Flow response**\n\n---\n\n## _The final step of your flow can send output to an external system, which is particularly useful for flows initiated by triggers like Chat or GraphQL API integrations._",
          "color": "green",
          "nodeId": "stickyNoteNode",
          "nodeName": "Sticky Note",
          "nodeType": "stickyNoteNode"
        }
      },
      "type": "stickyNoteNode",
      "measured": {
        "width": 220,
        "height": 200
      },
      "position": {
        "x": -710.6880629678146,
        "y": 370.6310610504351
      },
      "draggable": true
    },
    {
      "id": "sticky-gm21yx26f",
      "data": {
        "modes": {},
        "nodeId": "stickyNoteNode",
        "values": {
          "id": "sticky-gm21yx26f",
          "text": "# **➕ Nodes**\n\n---\n\n_Nodes are the fundamental building blocks of a flow. Each node serves a specific purpose, acting as a self-contained unit that processes input and produces output. This modular approach allows users to create complex flows by interconnecting various nodes._\n\nNode Types :\n\n1. **📱 Apps** \\- Integrate third-party applications into your flow.\n2. **🤖 AI** \\- Perform AI operations within your flow.\n3. **🛢️ Data** \\- Manipulate and transform data within your flow.\n4. **♾️ Logic** \\- Control the flow of execution in your flow.",
          "color": "blue",
          "nodeId": "stickyNoteNode",
          "nodeName": "Sticky Note",
          "nodeType": "stickyNoteNode"
        }
      },
      "type": "stickyNoteNode",
      "dragging": false,
      "measured": {
        "width": 220,
        "height": 200
      },
      "position": {
        "x": -592.6361650382371,
        "y": 162.64977727873207
      },
      "selected": false,
      "draggable": true
    },
    {
      "id": "triggerNode_1",
      "data": {
        "modes": {},
        "nodeId": "graphqlNode",
        "schema": {
          "sampleOutput": "string"
        },
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
      "id": "LLMNode_680",
      "data": {
        "modes": {},
        "nodeId": "LLMNode",
        "schema": {
          "_meta": "object",
          "images": "array",
          "tool_calls": "object",
          "generatedResponse": "string"
        },
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
      "id": "responseNode_triggerNode_1",
      "data": {
        "modes": {},
        "nodeId": "graphqlResponseNode",
        "schema": {},
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