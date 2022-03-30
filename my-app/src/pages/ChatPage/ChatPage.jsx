import Header from '../../components/Header/Header';
import CategoriesBar from '../../components/CategoriesBar/CategoriesBar';
import FooterNavbar from '../../components/FooterNavbar/FooterNavbar';

export default function ChatPage({ navigation }) {

    return (
        <>
            <Header />
            <CategoriesBar />

            <FooterNavbar navigation={navigation} />
        </>
    );
}

