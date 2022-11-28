import React from "react";
import { SafeAreaView, View, Image, ScrollView, TouchableOpacity, Text, StyleSheet, TextInput, FlatList } from "react-native";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      promotion: [
        { id: 1, title: "Next Station", description: "NeLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the" },
        { id: 2, title: "Efe", description: "the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release ." },
        { id: 3, title: "Next Station", description: "NeLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the" },
        { id: 4, title: "Efe", description: "the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release ." },
      ],
      category: [
        { id: 5, title: "Global", icon: require("./e.png") },
        { id: 6, title: "Duyuru", icon: require("./b.png") },
        { id: 10, title: "Favoriler", icon: require("./g.png") },
        { id: 7, title: "Takvim", icon: require("./c.png") },
        { id: 8, title: "Sorunlar", icon: require("./d.png") },
        { id: 9, title: "Ayarlar", icon: require("./a.png") },
      ],
      product: [
        { id: 10, image: require("./foto1.png") },
        { id: 11, image: require("./foto2.png") },
        { id: 12, image: require("./foto3.png") },
        { id: 13, image: require("./foto4.png") },
      ]
    }
  }
  renderPromotionItem = ({ item }) => {
    return <View style={style.promotionItem}>
      <Text style={style.promotionItemTitle}>{item.title}</Text>
      <Text style={style.promotionItemDescription}>{item.description}</Text>
    </View>
  }
  renderCategoryItem = ({ item }) => {
    return <View style={style.categoryItem}>
      <View style={style.categoryItemIconContainer}>
        <Image source={item.icon} style={style.categoryItemIcon} />
      </View>
      <Text style={style.categoryItemTitle}>{item.title}</Text>
    </View>
  }
  renderProductItem = ({ item }) => {
    return <View style={style.productItem}>
      <View style={style.productItemImageContainer}>
        <Image source={item.image} style={style.productItemImage} />
      </View>
      <Text style={style.productItemTitle}>{item.title}</Text>
      <Text style={style.productItemPrice}>{item.price}</Text>
    </View>
  }


  render() {
    const { promotion, category, product } = this.state;
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={style.header}>
          <View>
            <Text style={{ fontSize: 18, fontWeight: "700", marginBottom: 3 }}>Merhaba Efe</Text>
            <Text style={{ color: "orange", fontSize: 14 }}>Yazılım Destek</Text>
          </View>
          <View>
            <Image source={{ uri: "https://store.donanimhaber.com/29/0f/a2/290fa2650da2b7bce9f0d7670557a99a.jpg" }} style={style.avatar} />
          </View>
        </View>
        <ScrollView showsHorizontalScrollIndicator={false} style={{ flex: 1 }}>
          <View style={style.banner}><Text style={style.bannerText}>blablabla</Text></View>
          <View style={style.content}>
            <View style={style.searchArea}>
              <View style={style.searchInputContainer}><TextInput placeholder={"Bir Şeyler Ara"} placeholderTextColor={"lightgray"} style={style.searchInput} /></View>
              <View style={style.searchButtonContainer}><TouchableOpacity style={style.searchButton}><Text>Ara</Text></TouchableOpacity></View>
            </View>
            <View style={style.promotion}>
              <FlatList
                style={{ paddingHorizontal: 5 }}
                showsHorizontalScrollIndicator={false}
                data={promotion}
                horizontal={true}
                renderItem={this.renderPromotionItem} />
            </View>
          </View>
          <View style={style.categoryArea}>
            <View style={style.categoryAreaTopBar}>
              <View><Text style={{ fontSize: 18, color: "#535353", fontWeight: "500" }}>Kategori</Text></View>
              <View><Text style={{ fontSize: 15, color: "orange" }}>Hepsini Göster</Text></View>
            </View>
            <View style={{ marginTop: 20 }}>
              <FlatList
                style={{ paddingHorizontal: 5 }}
                showsHorizontalScrollIndicator={false}
                data={category}
                horizontal={true}
                renderItem={this.renderCategoryItem} />
            </View>
          </View>
          <View style={style.categoryArea}>
            <View style={style.categoryAreaTopBar}>
              <View><Text style={{ fontSize: 18, color: "#535353", fontWeight: "500" }}>Fotoğraf</Text></View>
              <View><Text style={{ fontSize: 15, color: "orange" }}>Hepsini Göster</Text></View>
            </View>
            <View style={{ marginTop: 20 }}>
              <FlatList
                style={{ paddingHorizontal: 5 }}
                showsHorizontalScrollIndicator={false}
                data={product}
                horizontal={true}
                renderItem={this.renderProductItem} />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>)
  }
}

const style = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: "center",
  },
  avatar: {
    width: 55,
    height: 55,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "orange",
  },
  banner: {
    backgroundColor: "orange",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  bannerText: {
    color: "white",
    textAlign: "center",
    fontWeight: "700",
    fontSize: 14,
  },
  content: {
    paddingHorizontal: 20,
  },
  searchArea: {
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,

    paddingVertical: 15,
  },
  searchInputContainer: {
    flex: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 2.62,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
  },
  searchInput: {
    padding: 15,
    borderWidth: 1,
    borderColor: "#E3E3E3",
    borderRadius: 5,
  },
  searchButtonContainer: {
    padding: 15,
    marginLeft: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.30,
    shadowRadius: 2.65,
    elevation: 8,
    borderRadius: 5,
    backgroundColor: "white",
  },
  promotion: {
    marginTop: 20,
  },
  promotionItem: {
    backgroundColor: "orange",
    padding: 10,
    flex: 1,
    width: 280,
    height: 150,
    borderRadius: 10,
    marginLeft: 5,
    marginRight: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  promotionItemTitle: {
    color: "#535353",
    fontSize: 25,
    fontWeight: "500",
  },
  promotionItemDescription: {
    color: "white",
    fontSize: 13,
    marginTop: 10,
    fontWeight: "500",
  },
  categoryAreaTopBar: {
    flexDirection: "row",
    paddingHorizontal: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
  categoryArea: {
    marginTop: 20,
  },
  categoryItem: {
    marginLeft: 10,
    marginRight: 10,
    alignItems: "center",
  },
  categoryItemIconContainer: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 2.62,
    elevation: 10,
    borderRadius: 10,
    backgroundColor: "white",
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center"
  },
  categoryItemIcon: {
    width: "80%",
    height: "80%",
  },
  categoryItemTitle: {
    textAlign: "center",
    fontWeight: "600",
    marginTop: 5,
    fontSize: 14,
    color: "#535353"
  },
  productItem: {
    width: 160,
    height: 160,
    marginLeft: 10,
    marginRight: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 2.62,
    elevation: 10,
    borderRadius: 10,
    backgroundColor: "white",
  },
  productItemImageContainer: {

    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  productItemImage: {
    width: "100%",
    height: "100%",
  }, productItemTitle: {
    color: "#1D1D1D",
    fontSize: 18,
  }
});