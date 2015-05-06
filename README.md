# Task: Create an API for a movable component

Go to this [link](http://www.jsplumb.org/demo/flowchart/dom.html) and play around with the demo. 

In the demo, you have a bunch of components that you can drag around the screen. In addition, you can establish connections between two components on the screen or remove connections. 

In this task, you need to design an API for a class representing the components in the demo. 

The API should support the following: 

 - A Compontent can be dragged to an arbitary location on the screen. 
 - Components can be connected to each other. In addition, each connection can have a label for itself, and two labels for each endpoint. 
 - Each component has four outlets that connections can go into. The component cannot accept more than four connections. In addition, the component should be able to answer which outlets have been connected to what connections. 
 - Components can be disconnected from each other. 
 - A component should be able to answer whether it is connected to a given component and if so should provide information about the connection (labels of the connection). 
 - Connections are directional. Each connection has a source and a sink (target). 

###  what you need to do: 

- Design classes and their public APIs for the components and any other object that you need. 
- Document the API: Parameters, Return values, error cases, guarantees, and contracts. Also find a way to hide the internals of your objects from the outside world. 
- You need to define the functions and internal/external variables for your classes. You don't need to implement the functions or define any internal helper functions. 
- You can make any assumption you want as long as you specify them clearly and that they don't contradict any instructions above. 

### How to do it: 

Fork this repo in your Github account, submit your code, and then perform a pull request. 
