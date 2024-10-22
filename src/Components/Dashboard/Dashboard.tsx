import React from 'react';
import { Box, Heading, Text, Button, VStack, Link } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { Cookies } from 'react-cookie';

const Dashboard = () => {
  const navigate = useNavigate();
  const cookies = new Cookies();

  const handleLogout = () => {
    cookies.remove('username', { path: '/' });
    localStorage.removeItem('isLoggedIn');
    navigate('/login');
  };

  return (
    <Box w="100vw" h="100vh" display="flex" justifyContent="center" alignItems="center" bg="blue.50">
      <VStack spacing={6} boxShadow="lg" p={8} bg="white" borderRadius="md" width="80%" maxW="1000px">
        <Heading size="2xl" color="teal.600">台灣的水資源介紹</Heading>
        
        {/* 可滾動的文本區域 */}
        <Box maxH="400px" overflowY="auto" p={4} bg="gray.50" borderRadius="md">
          <Text fontSize="lg" color="gray.700">
            台灣地處亞熱帶氣候區，年降雨量約為2500毫米，雖然雨量豐沛，
            但因為台灣的地理特性，降雨分布不均，乾季和颱風季之間的水資源差異顯著。
            台灣的河川短且急，水資源儲存困難，這使得台灣在乾旱時期容易面臨缺水的危機。
            
            主要的水資源來源包括降雨、河川、以及地下水，台灣的水庫在水資源管理中扮演重要角色。
            不過，隨著氣候變遷和都市發展，台灣的水資源管理面臨日益嚴峻的挑戰。
            
            為了確保未來的水資源供應，台灣政府正積極推動節水政策、水庫清淤、以及興建人工濕地等多項計畫。

            台灣的降雨季節性強，降雨集中於梅雨季和颱風季，因此河川水流量波動大。
            水庫的建設有助於在雨季儲存多餘的水資源，以供乾季使用。然而，隨著時間的推移，水庫的淤積問題愈加嚴重，
            減少了可利用的庫容，這對於長期的水資源管理是一大挑戰。為了應對這個問題，政府每年都進行大規模的水庫清淤工作。

            氣候變遷對於台灣的水資源影響不可忽視。隨著全球氣候的變化，台灣的極端氣候事件越來越頻繁，這對水資源的供應造成了不穩定。
            一方面，暴雨頻發會導致水資源的瞬時大量流失，另一方面，乾旱時期的缺水問題也愈加嚴重。

            台灣政府也在積極推廣節水措施，特別是在都市地區。透過教育和法規的推動，政府鼓勵企業和家庭使用節水設備，
            並推行再生水的利用，這有助於降低對於天然水資源的依賴。

            水資源的永續發展需要多方面的努力，從政府政策到企業和個人的共同參與。未來，台灣將繼續面臨水資源挑戰，
            但透過持續的技術創新和政策改革，相信台灣能夠有效應對這些挑戰，確保下一代有足夠的水資源供應。
            
            除了水庫清淤和節水政策，興建人工濕地也是台灣近年來的重要水資源管理措施之一。人工濕地不僅有助於改善水質，
            還能增加地下水的補充，這對於乾季的供水保障至關重要。

            台灣的地下水資源也是一個重要的水源補充來源。然而，過度抽取地下水可能會導致地層下陷等嚴重問題。
            因此，政府對地下水的管理也逐漸加強，推動更嚴格的抽水規範。

            根據水利署的統計，台灣每年的地下水開發量約佔全台用水量的30%，但在某些缺水嚴重的地區，地下水的使用比例甚至更高。
            這使得地下水的可持續利用變得至關重要。

            未來，台灣的水資源管理將面臨越來越多的挑戰，不僅是自然環境的變化，也包括經濟和社會發展帶來的水資源需求增加。
            通過技術創新、政策支持和全民參與，台灣將在水資源管理的道路上邁出更加堅實的步伐。
          </Text>
        </Box>

        <Button as={Link} href="https://www.wra.gov.tw/" colorScheme="teal" target="_blank">
          了解更多
        </Button>

        <Button
          bg="logout"
          onClick={handleLogout}
          style={{ position: 'fixed', top: '10px', right: '10px' }}
        >
          登出
        </Button>
      </VStack>
    </Box>
  );
};

export default Dashboard;
