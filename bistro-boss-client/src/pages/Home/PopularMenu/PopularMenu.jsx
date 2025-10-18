
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItem from '../../shared/MenuItem/MenuItem';
import useMenu from '../../../Hooks/useMenu';

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');
    // const [menu, setMenu] = useState([])
    // useEffect(() => {
    //     fetch('/menu.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         const popularItems = data.filter(item => item.category === 'popular');
    //         setMenu(popularItems)
    //     })
    //     .catch(err => console.error('Failed to load menu.json', err))
    // },[])
    return (
        <div>
            <section>
                <SectionTitle
                heading={"From Our Menu"}
                subHeading={"Popular Items"}
                >

                </SectionTitle>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-10">
                    {
                        popular.map(item => (
                            <MenuItem key={item._id} item={item} />
                        ))
                    }
                </div>

                <button className='btn btn-outline border-0 border-b-4 mt-4'> View Full Menu</button>
            </section>
        </div>
    );
};

export default PopularMenu;