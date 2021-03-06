import React, { Component, useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import DraggableFlatList from "react-native-draggable-flatlist";

const exampleData = [...Array(20)].map((d, index) => ({
    key: `item-${index}`, // For example only -- don't use index as your key!
    label: index,
    backgroundColor: `rgb(${Math.floor(Math.random() * 255)}, ${index *
        5}, ${132})`
}));

const Example = () => {
    const [data, setData] = useState(exampleData)

    const renderItem = ({ item, index, drag, isActive }) => {
        return (
            <TouchableOpacity
                style={{
                    height: 100,
                    backgroundColor: item.backgroundColor,
                    alignItems: "center",
                    justifyContent: "center",
                    transform: [{ scale: isActive ? 1.2 : 1 }],
                    margin: 4,
                    borderRadius: 5
                }}
                onLongPress={drag}
            >
                <Text
                    style={{
                        fontWeight: "bold",
                        color: "white",
                        fontSize: 32
                    }}
                >
                    {item.label}
                </Text>
            </TouchableOpacity>
        );
    };



    return (
        <View style={{ flex: 1 }}>
            <DraggableFlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item, index) => `draggable-item-${item.key}`}
                onDragEnd={({ data }) => setData(data)}

            />
        </View>
    );

}

export { Example };