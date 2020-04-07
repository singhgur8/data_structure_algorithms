class Solution(object):
    def allPathsSourceTarget(self, graph):
        """
        :type graph: List[List[int]]
        :rtype: List[List[int]]
        """
        result = []
        def helper(graph, path, nodeIndex, result):
            if nodeIndex == len(graph)-1:
                return result.append(path + [nodeIndex])
            else:
                for idx in range(len(graph[nodeIndex])):
                    helper(graph, path+[nodeIndex], graph[nodeIndex][idx], result)
        
        
        for idx in range(len(graph[0])):
            helper(graph, [0], graph[0][idx], result)
            
        return result