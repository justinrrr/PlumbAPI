### Task: Create an API for a movable object

Go to this [link](http://www.jsplumb.org/demo/flowchart/dom.html) and play around with the demo. 

In the demo, you have a bunch of components that you can drag around the screen. In addition, you can establish connections between two components on the screen or remove connections. 

In this task, you need to design an API for a class representing the components in the demo. 

The API should support the following: 

 - A Compontent can be dragged to an arbitary location on the screen. 
 - Components can be connected to each other. In addition, each connection can have a label for itself, and two labels for each endpoint. 
 - Each component has four outlets that connections can go into. The component cannot accept more than four connections. In addition, the component should be able to answer which outlets have been connected to what connections. 
 - Components can be disconnected from each other. 
 - A component should be able to answer whether it is connected to a given component and if so should provide information about the connection (labels of the connection). 

