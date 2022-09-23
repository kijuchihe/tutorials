# Graphs

These are perfect for modeling real world objects

A graph consists of `vertices` (like nodes) and `edges` connecting those
vertices. For example, in a social network, the vertices could be people and the
edges could be friendships

## Types of graphs

- Undirected Graphs:
  - These are 2-way relationships like in a social network where both people
    know each other
- Directed Graphs:
  - Like a flight that moves just in one direction

Ways of implementing graphs

- Using and adjacency list:
  - List of neightbours stored in each vertex
- Adjacency Matrix:
  - Matrix of neightbours stored centrally in graph object

## An undirected Graph

In an adjacency list, each vertex will store a list of items it is connected to

`A:BCE`

`B:AC`

An Adjacency Matrix

This looks like a table:

- Vertically arranged are the from vertices
- Horizontally arranged are the to vertices

It puts a 0 in where there's no edge and 1 where there's a connection. This
matrix (or table) will then be stored in a graph object itself

If you have weighted edges, it is much easier to implement these structures with
an adjacency matrix because when filling in the data into the matrix, you can
just put in the weights but if using an adjacency list, you'll have to pass in a
list of tuples: where the tuple has the vertices and the edges

## Directed Graph

In an adjacency list, you just have to put the the vertices that each vertices
point to as the list of items

`A: C`

`B: A`

`C: B, D, E`

`D:`

`E: A`

Is dense graph every vertex amybe connected to every other vertex and there are
a lot edges relative to the number of vertices so may be each vertex is
connected to a every other edge where the number of edges will be

`e = v^2`

In sparse graph there are relatively few edges

`e=v`

An adjacency list takes up v^2 space, regardless how dense the graph is (sparse
or dense)

The matrix for a graph with 10,000 will take up atleast a 100MB

## Trade offs

Adjancency List

- Pros:
  - It is fster
  - It uses less space for sparse graphs
- Cons:
  - It is slower for dense graphs

Adjacency Matrix

- Pros:
  - Faster for dense Graphs
  - Simpler to implement for weighted edges
- Cons:
  - Uses more space

## Code

Verex Class

```py
class Vertex():
    def __init__(self, n):
        self.name = n
        self.neighbours = set()

    def add_neighbour(self, v):
        self.neighbours.add(v)
```

graph class

```py
class Graph:
    vertices = {}

    def add_vertex(self, vertex):
        if isinstance(vertex, Vertex) and vertex.name not in self.vertices:
            self.vertices[vertex.name] = vertex
            return True
        else:
            return False

    def add_edge(self, u, v):
        if u in self.vertices and v in self.vertices:
            self.vertices[u].add_neighbour(v)
            self.vertices[v].add_neightbour(u)
            return True
        else:
            return False

    def print_graph(self):
        for key in sorted(list(sef.vertices.keys())):
            print(ket, sorted(list(self.vertices[key].neightbours)))
```

### USing Adjacency Matrix

```py
class Vertex:
    def __init__(self, n):
        self.name = n


class Graph():
    vertices = {}
    edges = []
    edge_indeces = {}

    def add_vertex(self, vertex):
        if instance(vertex, Vertex) and vertex.name not in self.vertices:
            self.vertices[vertex.name] = vertex
            # for loop appends a column of zeros to the
            for row in self.edges:
                row.append(0)
            # append a row of zeros to the bottom og the edges matrx
            self.edges.append[0] * (len(self.edges)+1)
            self.edge_indices[vertex.name] = len(self.edge_indices)
            return True
        else:
            return False

    def add_edge(self, u, v, weight=1):
        if u in self.vertices and v in self.vertices:
            self.edges[self.edge_indices[u]][self.edge_indeces[v]] = weight
            self.edges[self.edge_indices[v]][self.edge_indeces[u]] = weight
            return True
        else:
            return False

    def print_graph(self):
        for v, i in sorted(self.edge_indeces.items()):
            print(v + " ", end="")
            for j in range(len(self.edges)):
                print(self.edges[i][j], end=" ")
            print(" ")
```
