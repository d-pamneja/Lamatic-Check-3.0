const flowConfig = {
  "id": "fcf9d626-ceda-4c72-82eb-ec0e18fe9784",
  "name": "Immense Ice",
  "nodes": [
    {
      "id": "triggerNode_1",
      "data": {},
      "type": "triggerNode",
      "position": {
        "x": 0,
        "y": 0
      }
    }
  ],
  "edges": [],
  "status": "active",
  "created_at": "2025-11-03T18:12:27.592101+00:00"
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