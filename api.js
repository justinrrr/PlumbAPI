// Constructor function for the Component
// x: A non-negative Floating point number determining the x position
// y: A non-negative Floating point number determining the y position
// If negative numbers are passed in for x and y, they are set to 0
function Component(x, y) {

    x = x > 0 ? x : 0;
    y = y > 0 ? y : 0;
    this.x = x;
    this.y = y;
    // private property. An array of Connection objects (see below for defintion).
    // Connection at index i corresponds to a connection to the ith outlet.
    this._outlets = [];

    // a constant number to enforce a maximum size on the _outlets property.
    this._maxConnections = 4;
}

// Updates the position of the component.
// x : A non-negative floating point number corresponding to the new position x
// y : A non-negative floating point number corresponding to the new position y
// Errors: Raises an error if any of x and y are smaller than 0
// Returns: undefined
Component.prototype.move = function (x, y) {

};

// Connects the component to another component.
// If a connection object is specified as the second argument, the establish connection will
// contain all the labels of the passed in connection. Sink/Source properties of the connection however
// will be set to the new source and sink components.
// If a connection object is not specified as the second argument, a connection object with no labels
// will be created
// otherComponent: A component object representing the component we want to get connected to
// connection: (Optional) A connection object. The sink/source properties of this object will
// be set based on the components that are being connected.
// Error: Raises an error if either of the components being connected has all of its outlets filled with
// connections.
// Returns: A connection object representing the established connection
Component.prototype.connect = function (otherComponent, connection) {

};

// Disconnects any connections between this component and the otherComponent.
// If the two components are not connected the function has no effects.
// otherComponent: The component from which the current component will be disconnected.
// Returns: True if a connection was disconnected. False if there were no connections
Component.prototype.disconnect = function (otherComponent) {

};

// Returns the index of the outlet on this component that contains the passed in connection object.
// connection: The connection for which we want to find the outlet of
// Returns: index of the outlet on this component that contains the connection object. -1 if the connection
// does not exist on any of the outlets
Component.prototype.outletForConnection = function (connection) {

};

// Returns the connection at outlet with index outletIndex
// outletIndex: The index of the outlets for which we want to know the connection of
// Error: Raises an error if outletIndex is bigger than _maxConnections (4)
// Returns: A connection object representing the connection on the outlet at index outletIndex. null if the outlet
// is not connected to anything.
Component.prototype.connectionForOutlet = function (outletIndex) {

};

// Determines whether the component is connected to otherComponent
// otherComponent: a Component object that we are searching for connectivity of.
// Returns: true if the two components are connected. False otherwise
Component.prototype.isConnectedTo = function (otherComponent) {

};

// Returns the connection to otherComponent, if such connection exists.
// otherComponent: a Component object that we are searching for connectivity of.
// Returns: A connection object corresponding to the connection with otherComponent. null if the two
// components are not connected
Component.prototype.getConnectionToComponent = function (otherComponent) {

};

function Connection() {

}

// Sets the label for the connection
// label: A string representing the label for the connection
// Returns: The connection object itself so multiple methods can be chained
Connection.prototype.setLabel = function (label) {
    this.label = label;
};

// Sets the source component for this connection
// If there is already a source associated with this connection, it is replaced
// component: The component at the source of this connection
// Returns: The connection object itself so multiple methods can be chained
Connection.prototype.setSource = function (component) {

};

// Sets the sink component for this connection
// If there is already a sink associated with this connection, it is replaced
// component: The component at the sink of this connection
// Returns: The connection object itself so multiple methods can be chained
Connection.prototype.setSink = function (component) {

};

// Sets the label for the source connection.
// If there is no source component, the label is still set.
// label: A string representing the label for the connection
// Returns: The connection object itself so multiple methods can be chained
Connection.prototype.setSourceLabel = function (label) {

};

// Sets the label for the sink connection.
// If there is no sink component, the label is still set.
// label: A string representing the label for the connection
// Returns: The connection object itself so multiple methods can be chained
Connection.prototype.setSinkLabel = function (label) {

};

// removes the sink component from the connection if a sink exists.
// This function does not remove the sink label. If no sink exists, this function doesn't do anything.
// Returns: The sink component or null if no sink exists.
Connection.prototype.detachSink = function () {

};

// removes the source component from the connection if a source exists.
// This function does not remove the source label. If no source exists, this function doesn't do anything.
// Returns: The source component or null if no source exists.
Connection.prototype.detachSource = function () {

};
