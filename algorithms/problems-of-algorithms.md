# What kinds of problems are solved by algorithms?

Sorting is by no means the only computational problem for which algorithms have
been developed. Practical applications of algorithms are ubiquitous and include
the following examples:

- The Human Genome Project has made great progress toward the goals of
  identifying all the 100,000 genes in human DNA, determining the sequences of
  the 3 billion chemical base pairs that make up human DNA, storing this
  information in databases, and developing tools for data analysis. Each of
  these steps requires sophisticated algorithms. Although the solutions to the
  various problems involved are beyond the scope of this tutorial, many methods
  to solve these biological problems use ideas from several concepts that will
  be taught, thereby enabling scientists to accomplish tasks while using
  resources efficiently. The savings are in time, both human and machine, and in
  money, as more information can be extracted from laboratory techniques.
- The Internet enables people all around the world to quickly access and
  retrieve large amounts of information. With the aid of clever algorithms,
  sites on the Internet are able to manage and manipulate this large volume of
  data. Examples of problems that make essential use of algorithms include
  finding good routes on which the data will travel (techniques for solving such
  problems appear in Chapter 24), and using a search engine to quickly find
  pages on which particular information resides
- Electronic commerce enables goods and services to be negotiated and exchanged
  electronically, and it depends on the privacy of personal information such as
  credit card numbers, passwords, and bank statements. The core technologies
  used in electronic commerce include public-key cryptography and digital
  signatures, which are based on numerical algorithms and number theory.
- Manufacturing and other commercial enterprises often need to allocate scarce
  resources in the most beneficial way.
  - An oil company may wish to know where to place its wells in order to
    maximize its expected profit.
  - A political candidate may want to determine where to spend money buying
    campaign advertising in order to maximize the chances of winning an
    election.
  - An airline may wish to assign crews to flights in the least expensive way
    possible, making sure that each flight is covered and that government
    regulations regarding crew scheduling are met. An Internet service provider
    may wish to determine where to place additional resources in order to serve
    its customers more effectively.
  - All of these are examples of problems that can be solved using
    `linear programming`

Although some of the details of these examples are beyond the scope of this
book, we do give underlying techniques that apply to these problems and problem
areas. We also show how to solve many specific problems, including the
following:

- We are given a road map on which the distance between each pair of adjacent
  intersections is marked, and we wish to determine the shortest route from one
  intersection to another. The number of possible routes can be huge, even if we
  disallow routes that cross over themselves. How do we choose which of all
  possible routes is the shortest? Here, we model the road map (which is itself
  a model of the actual roads) as a graph (which we will meet in Part VI and
  Appendix B), and we wish to find the shortest path from one vertex to another
  in the graph. We shall see how to solve this problem efficiently in
  Chapter 24.
- We are given two ordered sequences of symbols, X D hx1; x2;:::;xmi and Y D
  hy1; y2;:::;yni, and we wish to find a longest common subsequence of X and Y .
  A subsequence of X is just X with some (or possibly all or none) of its
  elements removed. For example, one subsequence of hA; B; C; D; E; F; Gi would
  be hB; C; E; Gi. The length of a longest common subsequence of X and Y gives
  one measure of how similar these two sequences are. For example, if the two
  sequences are base pairs in DNA strands, then we might consider them similar
  if they have a long common subsequence. If X has m symbols and Y has n
  symbols, then X and Y have 2m and 2n possible subsequences, respectively.
  Selecting all possible subsequences of X and Y and matching them up could take
  a prohibitively long time unless m and n are very small. We shall see in
  Chapter 15 how to use a general technique known as dynamic programming to
  solve this problem much more efficiently.
- We are given a mechanical design in terms of a library of parts, where each
  part may include instances of other parts, and we need to list the parts in
  order so that each part appears before any part that uses it. If the design
  comprises n parts, then there are nŠ possible orders, where nŠ denotes the
  factorial function. Because the factorial function grows faster than even an
  exponential function, we cannot feasibly generate each possible order and then
  verify that, within that order, each part appears before the parts using it
  (unless we have only a few parts). This problem is an instance of topological
  sorting, and we shall see in Chapter 22 how to solve this problem efficiently.
- We are given n points in the plane, and we wish to find the convex hull of
  these points. The convex hull is the smallest convex polygon containing the
  points. Intuitively, we can think of each point as being represented by a nail
  sticking out from a board. The convex hull would be represented by a tight
  rubber band that surrounds all the nails. Each nail around which the rubber
  band makes a turn is a vertex of the convex hull. (See Figure 33.6 on page
  1029 for an example.) Any of the 2n subsets of the points might be the
  vertices of the convex hull. Knowing which points are vertices of the convex
  hull is not quite enough, either, since we also need to know the order in
  which they appear. There are many choices, therefore, for the vertices of the
  convex hull. Chapter 33 gives two good methods for finding the convex hull.

These lists are far from exhaustive (as you again have probably surmised from
this book’s heft), but exhibit two characteristics that are common to many
interesting algorithmic problems:\

1. They have many candidate solutions, the overwhelming majority of which do not
   solve the problem at hand. Finding one that does, or one that is “best,” can
   present quite a challenge.
2. They have practical applications. Of the problems in the above list, finding
   the shortest path provides the easiest examples. A transportation firm, such
   as a trucking or railroad company, has a financial interest in finding
   shortest paths through a road or rail network because taking shorter paths
   results in lower labor and fuel costs. Or a routing node on the Internet may
   need to find the shortest path through the network in order to route a
   message quickly. Or a person wishing to drive from New York to Boston may
   want to find driving directions from an appropriate Web site, or she may use
   her GPS while driving.

Not every problem solved by algorithms has an easily identified set of candidate
solutions. For example, suppose we are given a set of numerical values
representing samples of a signal, and we want to compute the discrete Fourier
transform of these samples. The discrete Fourier transform converts the time
domain to the frequency domain, producing a set of numerical coefficients, so
that we can determine the strength of various frequencies in the sampled signal.
In addition to lying at the heart of signal processing, discrete Fourier
transforms have applications in data compression and multiplying large
polynomials and integers. Chapter 30 gives an efficient algorithm, the fast
Fourier transform (commonly called the FFT), for this problem, and the chapter
also sketches out the design of a hardware circuit to compute the FFT.
