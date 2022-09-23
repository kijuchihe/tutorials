# Introduction to Algorithms

## What is an algorithm ?

Informally, an algorithm is any well-defined computational procedure that takes
some value, or set of values, as input and produces some value, or set of
values, as output. An algorithm is thus a sequence of computational steps that
transform the input into the output

We can also view an algorithm as a tool for solving a well-specified
computational problem. The statement of the problem specifies in general terms
the desired input/output relationship. The algorithm describes a specific
computational procedure for achieving that input/output relationship.

For example, we might need to sort a sequence of numbers into nondecreasing
order. This problem arises frequently in practice and provides fertile ground
for introducing many standard design techniques and analysis tools. Here is how
we formally define the sorting problem:

Input: A sequence of n numbers (a1, a2, ... , an).

Output: A permutation (reordering) (a1, a2, ... , an) of the input sequence such
that a_1 <= a_2 <= ... <= a_3

For example, given the input sequence (31, 41, 59, 26, 41, 58), a sorting
algorithm returns as output the sequence (26, 31, 41, 41, 58, 59). Such an input
sequence is called an instance of the sorting problem.

In general, an instance of a problem consists of the input (satisfying whatever
constraints are imposed in the problem statement) needed to compute a solution
to the problem.

An algorithm is said to be correct if, for every input instance, it halts with
the correct output. We say that a correct algorithm solves the given
computational problem.

An incorrect algorithm might not halt at all on some input instances, or it
might halt with an incorrect answer. Contrary to what you might expect,
incorrect algorithms can sometimes be useful, if we can control their error
rate.

We shall see an example of an algorithm with a controllable error rate in
Chapter 31 when we study algorithms for finding large prime numbers. Ordinarily,
however, we shall be concerned only with correct algorithms.

An algorithm can be specified in English, as a computer program, or even as a
hardware design. The only requirement is that the specification must provide a
precise description of the computational procedure to be followed.

### An algorithmic problem

An algorithmic problem is specified by describing the complete set of instances
it must work on and of its output after running on one of these instances. This
distinction, between a problem and an instance of a problem, is fundamental. The
algorithmic problem known as sorting is defined as follows:
[Skiena:2008:ADM:1410219]

- Problem: Sorting
- Input: A sequence of n keys, a_1, a_2, ..., a_n.
- Output: The reordering of the input sequence such that
  $a_1 <= a_2 <= ... <= a_{n-1} <= a_n$

An instance of sorting might be an array of strings, such as { Haskell, Emacs }
or a sequence of numbers such as { 154, 245, 1337 }.
