import {
  FlatList,
  Image,
  Pressable,
  StatusBar,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CartButton from "../../components/CartButton"; // ← ИСПРАВЛЕННЫЙ ПУТЬ
import { icons, images, offers } from "../../constants";

const tagEmoji: Record<string, string> = {
  Burgers: "🔥 Popular",
  Pizza: "⭐ Top Rated",
  Burritos: "🌯 Fresh",
  Fries: "🍟 Crispy",
  Salads: "🥗 Healthy",
  "Burgers Vol.2": "👑 Premium",
};

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F9F5F0" }}>
      <StatusBar barStyle="dark-content" backgroundColor="#F9F5F0" />

      <FlatList
        data={offers}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 32 }}
        ListHeaderComponent={
          <View style={{ paddingHorizontal: 20 }}>
            {/* Top bar */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingTop: 8,
                paddingBottom: 20,
              }}
            >
              <View style={{ flex: 1 }}>
                <Image
                  source={images.logo}
                  style={{ width: 48, height: 48, marginBottom: 6 }}
                  resizeMode="contain"
                />
                <Text
                  style={{
                    fontFamily: "Quicksand-Bold",
                    fontSize: 22,
                    color: "#1C1C1E",
                    lineHeight: 28,
                  }}
                >
                  Hey, Artyom 👋
                </Text>
                <Text
                  style={{
                    fontFamily: "Quicksand-Regular",
                    fontSize: 14,
                    color: "#9B9B9B",
                    marginTop: 2,
                  }}
                >
                  What are you craving today?
                </Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <CartButton />
                <View
                  style={{
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.15,
                    shadowRadius: 6,
                    elevation: 4,
                    borderRadius: 24,
                  }}
                >
                  <Image
                    source={images.avatar}
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 22,
                      borderWidth: 2.5,
                      borderColor: "#FF4500",
                    }}
                  />
                </View>
              </View>
            </View>

            {/* Поисковая строка */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                borderRadius: 16,
                paddingHorizontal: 16,
                paddingVertical: 12,
                marginBottom: 24,
                gap: 10,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.06,
                shadowRadius: 8,
                elevation: 2,
              }}
            >
              <Image
                source={icons.search}
                style={{ width: 18, height: 18, tintColor: "#9B9B9B" }}
                resizeMode="contain"
              />
              <Text
                style={{
                  fontFamily: "Quicksand-Regular",
                  fontSize: 15,
                  color: "#C0C0C0",
                }}
              >
                Search burgers, pizza...
              </Text>
            </View>

            {/* Заголовок секции */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 16,
              }}
            >
              <Text
                style={{
                  fontFamily: "Quicksand-Bold",
                  fontSize: 20,
                  color: "#1C1C1E",
                }}
              >
                Today's Offers
              </Text>
              <Text
                style={{
                  fontFamily: "Quicksand-SemiBold",
                  fontSize: 14,
                  color: "#FF4500",
                }}
              >
                See all →
              </Text>
            </View>
          </View>
        }
        renderItem={({ item, index }) => {
          const isEven = index % 2 === 0;
          const tag = tagEmoji[item.title] ?? "✨ Special";

          return (
            <Pressable
              android_ripple={{ color: "#00000015", borderless: false }}
              style={({ pressed }) => ({
                marginHorizontal: 20,
                marginBottom: 16,
                borderRadius: 24,
                backgroundColor: "#FFFFFF",
                overflow: "hidden",
                shadowColor: item.color,
                shadowOffset: { width: 0, height: 6 },
                shadowOpacity: 0.2,
                shadowRadius: 12,
                elevation: 5,
                opacity: pressed ? 0.93 : 1,
              })}
            >
              {({ pressed }) => (
                <View
                  style={{
                    flexDirection: isEven ? "row" : "row-reverse",
                    height: 130,
                    backgroundColor: item.color + "18",
                  }}
                >
                  {/* Картинка */}
                  <View
                    style={{
                      width: "48%",
                      alignItems: "center",
                      justifyContent: "center",
                      paddingVertical: 8,
                      paddingHorizontal: 4,
                    }}
                  >
                    <Image
                      source={item.image}
                      style={{
                        width: "100%",
                        height: "100%",
                        transform: pressed
                          ? [{ scale: 0.95 }]
                          : [{ scale: 1.05 }],
                      }}
                      resizeMode="contain"
                    />
                  </View>

                  {/* Текст */}
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      paddingHorizontal: 16,
                      gap: 8,
                    }}
                  >
                    {/* Тег */}
                    <View
                      style={{
                        backgroundColor: item.color + "30",
                        paddingHorizontal: 10,
                        paddingVertical: 4,
                        borderRadius: 20,
                        alignSelf: "flex-start",
                      }}
                    >
                      <Text
                        style={{
                          fontFamily: "Quicksand-SemiBold",
                          fontSize: 11,
                          color: item.color,
                        }}
                      >
                        {tag}
                      </Text>
                    </View>

                    {/* Название */}
                    <Text
                      style={{
                        fontFamily: "Quicksand-Bold",
                        fontSize: 20,
                        color: "#1C1C1E",
                        lineHeight: 24,
                      }}
                    >
                      {item.title}
                    </Text>

                    {/* Explore */}
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 4,
                      }}
                    >
                      <Text
                        style={{
                          fontFamily: "Quicksand-Medium",
                          fontSize: 13,
                          color: item.color,
                        }}
                      >
                        Explore
                      </Text>
                      <Image
                        source={icons.arrowRight}
                        style={{
                          width: 14,
                          height: 14,
                          tintColor: item.color,
                        }}
                        resizeMode="contain"
                      />
                    </View>
                  </View>
                </View>
              )}
            </Pressable>
          );
        }}
      />
    </SafeAreaView>
  );
}
