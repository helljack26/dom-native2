// import React from "react";
// import { StyleSheet, Text, View, AppRegistry } from "react-native";

// import { NativeRouter, Route, Link } from "react-router-native";

// const Home = () => <Text style={styles.header}>Home</Text>;

// const About = () => <Text style={styles.header}>About</Text>;

// const Topic = ({ match }) => (
//     <Text style={styles.topic}>{match.params.topicId}</Text>
// );

// const Topics = ({ match }) => (
//     <View>
//         <Text style={styles.header}>Topics</Text>
//         <View>
//             <Link
//                 to={`${match.url}/rendering`}
//                 style={styles.subNavItem}
//                 underlayColor="#f0f4f7"
//             >
//                 <Text>Rendering with React</Text>
//             </Link>
//             <Link
//                 to={`${match.url}/components`}
//                 style={styles.subNavItem}
//                 underlayColor="#f0f4f7"
//             >
//                 <Text>Components</Text>
//             </Link>
//             <Link
//                 to={`${match.url}/props-v-state`}
//                 style={styles.subNavItem}
//                 underlayColor="#f0f4f7"
//             >
//                 <Text>Props v. State</Text>
//             </Link>
//         </View>

//         <Route path={`${match.path}/:topicId`} component={Topic} />
//         <Route
//             exact
//             path={match.path}
//             render={() => (
//                 <Text style={styles.topic}>Please select a topic.</Text>
//             )}
//         />
//     </View>
// );

// const App = () => (
//     <NativeRouter>
//         <View style={styles.container}>
//             <View style={styles.nav}>
//                 <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
//                     <Text>Home</Text>
//                 </Link>
//                 <Link
//                     to="/about"
//                     underlayColor="#f0f4f7"
//                     style={styles.navItem}
//                 >
//                     <Text>About</Text>
//                 </Link>
//                 <Link
//                     to="/topics"
//                     underlayColor="#f0f4f7"
//                     style={styles.navItem}
//                 >
//                     <Text>Topics</Text>
//                 </Link>
//             </View>

//             <Route exact path="/" component={Home} />
//             <Route path="/about" component={About} />
//             <Route path="/topics" component={Topics} />
//         </View>
//     </NativeRouter>
// );

// const styles = StyleSheet.create({
//     container: {
//         marginTop: 25,
//         padding: 10
//     },
//     header: {
//         fontSize: 20
//     },
//     nav: {
//         flexDirection: "row",
//         justifyContent: "space-around"
//     },
//     navItem: {
//         flex: 1,
//         alignItems: "center",
//         padding: 10
//     },
//     subNavItem: {
//         padding: 5
//     },
//     topic: {
//         textAlign: "center",
//         fontSize: 15
//     }
// });

// AppRegistry.registerComponent("MyApp", () => App);

// const DATA = [
//     {
//       id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
//       title: "First Item",
//     },
//     {
//       id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
//       title: "Second Item",
//     },
//     {
//       id: "58694a0f-3da1-471f-bd96-145571e29d72",
//       title: "Third Item",
//     },
//   ];

//   const Item = ({ item, onPress, backgroundColor, textColor }) => (
//     <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
//       <Text style={[styles.title, textColor]}>{item.title}</Text>
//     </TouchableOpacity>
//   );

//   const App = () => {
//     const [selectedId, setSelectedId] = useState(null);

//     const renderItem = ({ item }) => {
//       const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
//       const color = item.id === selectedId ? 'white' : 'black';

//       return (
//         <Item
//           item={item}
//           onPress={() => setSelectedId(item.id)}
//           backgroundColor={{ backgroundColor }}
//           textColor={{ color }}
//         />
//       );
//     };

//     return (
//       <SafeAreaView style={styles.container}>
//         <FlatList
//           data={DATA}
//           renderItem={renderItem}
//           keyExtractor={(item) => item.id}
//           extraData={selectedId}
//         />
//       </SafeAreaView>
//     );
//   };