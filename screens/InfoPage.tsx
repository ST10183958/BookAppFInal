import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import PageRead from './PageRead';
import { useState } from 'react';

const myArrTitles: any[] = [];
const ListOfLastRead: any[] = [];
const myArray: any[] = [];

const InfoPage = () => {
  /// page numbers ///
  const { params } = useRoute();

  //let inputValue = '222';
 // let Inputtitles = 'alone';
 // let inputGenre = 'Science';
 // let inputAuthor = 'Theadore';

  let inputValue = params?.inputValue;
  let Inputtitles = params?.Inputtitles;
  let inputGenre = params?.inputGenre;
  let inputAuthor = params?.inputAuthor;



  const bookItem =
    Inputtitles.toString() +
    '/' +
    inputValue.toString() +
    '/' +
    inputGenre.toString() +
    '/' +
    inputAuthor.toString();

  const seperator = '/';

  myArray.push(parseInt(inputValue));
  myArrTitles.push(bookItem);

  let sum = myArray.reduce((acc, curr) => acc + curr, 0);
  let avg = sum / myArray.length;

  /// page numbers ///

  /// titles  ///

  const [isVisible, setIsVisible] = useState(true);
  const ClosePageRead = () => {
    setIsVisible(false);
  };




  const renderLastRead = () => {
    return ListOfLastRead.map((item, index) => (
      <View>
        <Text key={index}> {item}</Text>
      </View>
    ));
  };



  const renderList = () => {
    return myArrTitles.map((item, index) => (
      <TouchableOpacity
        style={styles.ListOfBooksBackground} 
        onPress={() => handleViewClick(item.split(seperator)[0])}
        >
        <Image
          style={styles.BookCoverExample}
          source={require('./Gallary/BookCoverExample.png')}
        />
        <View style={styles.infoTextBox}>
          <Text style={styles.ListedtitleTxt} key={index}>
            Title: {item.split(seperator)[0]}
          </Text>
          <Text style={styles.ListedtitleTxt} key={index}>
            Number of Pages: {item.split(seperator)[1]}
          </Text>
          <Text style={styles.ListedtitleTxt} key={index}>
            Genre: {item.split(seperator)[2]}
          </Text>
          <Text style={styles.ListedtitleTxt} key={index}>
            Author of Pages: {item.split(seperator)[3]}
          </Text>
        </View>
      </TouchableOpacity>
    ));
  };

  /// titles  ///

  // Page Read Section function //
    const [clickedViewId, setClickedViewId] = useState('');
    
    const handleViewClick = (id) => {
    setIsVisible(true);
    setClickedViewId(id);

    ListOfLastRead.pop()
    ListOfLastRead.unshift(clickedViewId);
    
  };
  // Page Read Section function //

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.InfoSection}>
        <View style={styles.LastBookInfoSection}>
          <Text style={styles.LastbookTitle}> c</Text>
        </View>

        <View style={styles.TotalInfoSection}>
          <Text style={styles.TotalPagesTxt}>
            {' '}
            Total number of pages of all Books
          </Text>
          <Text style={styles.TotalPagesNum}>{sum}</Text>
          <Text style={styles.AveragePagesTxt}>
            {' '}
            Average number of pages of all Books
          </Text>
          <Text style={styles.AveragePagesNum}>{avg}</Text>

          <View>
            <Text> Last Read Books</Text>
            {renderLastRead()}
          </View>
        </View>
      </View>

      <ScrollView style={styles.BookListScroll}>
        <Text style={styles.CurrentBooksTxt}> Current Books </Text>
        {renderList()}
      </ScrollView>
      {isVisible && (
        <View style={styles.PageReadingSection}>
          <Text style={styles.BookTitleRead}>Current Book : {clickedViewId}</Text>

          <TouchableOpacity style={styles.CloseReadPageButton}>

            <Text onPress={ClosePageRead} style={styles.CloseReadPageButtonTxt}>
              Close
            </Text>
          </TouchableOpacity>

          <Text>
            As I sat on the edge of the cliff, the sea breeze blowing through my
            hair, I couldn't help but feel a sense of insignificance in the
            grand scheme of things. The ocean stretched out before me in all its
            boundless majesty and the vast sky above loomed large, reminding me
            of how tiny and insignificant we truly are in the universe. Yet,
            despite feeling like a speck of dust in the infinite cosmos, I was
            filled with a sense of wonder and awe at the beauty and mystery that
            surrounded me. There is so much to learn, to discover, to experience
            - and yet, it all feels so fragile and fleeting. One minute we're
            here, the next we're gone - but for now, I'll just enjoy the moment
            and take everything in As I sat on the edge of the cliff, the sea
            breeze blowing through my hair, I couldn't help but feel a sense of
            insignificance in the grand scheme of things. The ocean stretched
            out before me in all its boundless majesty and the vast sky above
            loomed large, reminding me of how tiny and insignificant we truly
            are in the universe. Yet, despite feeling like a speck of dust in
            the infinite cosmos, I was filled with a sense of wonder and awe at
            the beauty and mystery that surrounded me. There is so much to
            learn, to discover, to experience - and yet, it all feels so fragile
            and fleeting. One minute we're here, the next we're gone - but for
            now, I'll just enjoy the moment and take everything in
          </Text>

          <Text style={styles.CurrentPageNumberTxt}> Page 1 of 500</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default InfoPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  InfoSection: {},

  navigationbar: {
    top: 31,
  },
  storepage: {
    width: 70,
    height: 70,
    left: -10,
  },
  homepage: {
    width: 70,
    height: 70,
    left: 80,
    top: -70,
  },
  bookpage: {
    width: 70,
    height: 70,
    top: -140,
    left: 200,
  },
  historypage: {
    width: 70,
    height: 70,
    top: -207,
    left: 310,
  },

  TotalPagesTxt: {
    fontSize: 20,
  },
  AveragePagesTxt: {
    fontSize: 20,
  },
  TotalPagesNum: {
    fontSize: 30,
    left: 130,
  },
  AveragePagesNum: {
    fontSize: 30,
    left: 130,
  },

  BookListScroll: {
    top: 100,
  },

  CurrentBooksTxt: {
    fontSize: 20,
  },
  ListOfBooksBackground: {
    backgroundColor: 'white',
  },

  BookCoverExample: {
    width: 100,
    height: 100,
  },
  ListedtitleTxt: {
    padding: 1,
  },
  infoTextBox: {
    top: -100,
    left: 90,
  },
  PageReadingSection: {
    position: 'fixed',
    top: -0,
    width: 350,
    backgroundColor: 'white',
    height: 700,
  },
  BookTitleRead: {
    fontSize: 15,
  },
  CloseReadPageButton: {
    backgroundColor: 'green',
    borderRadius: 10,
    width: 70,
    padding: 5,
    left: 250,
    top: -15,
  },
  CloseReadPageButtonTxt: {
    color: 'white',
    fontSize: 20,
  },
  CurrentPageNumberTxt: {
    fontSize: 20,
    top: 450,
  },
});
