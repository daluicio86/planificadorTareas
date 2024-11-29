import { useState } from 'react';
import { FirstTab } from './FirstTab';
import { SecondTab } from './SecondTab';
import { ThirdTab } from './ThirdTab';


const Tabs = () => {
    const [activeTab, setActiveTab] = useState('tab1');

    return (
        <div className='container-hd'>
            <div className='tabs'>
                <div className={activeTab === 'tab1' ? 'active' : ''} onClick={() => setActiveTab('tab1')}>
                    T. Propiedad
                </div>
                <div className={activeTab === 'tab2' ? 'active' : ''} onClick={() => setActiveTab('tab2')}>
                    Ubicación
                </div>
                <div className={activeTab === 'tab3' ? 'active' : ''} onClick={() => setActiveTab('tab3')}>
                    Empresas
                </div>
            </div>
            <div className='tabsContent'>
                {activeTab === 'tab1' ? (
                    <>
						<FirstTab display="flex" opacity={1} />
						<SecondTab />
						<ThirdTab />
                    </>
                ) : activeTab === 'tab2' ? (
                    <>
						<SecondTab display="flex" opacity={1} />
						<FirstTab />
						<ThirdTab />
                    </>
                ) : (
                    <>
						<ThirdTab display="flex" opacity={1} />
						<FirstTab />
						<SecondTab />
                    </>
                )}
            </div>
        </div>
    );
};

export { Tabs };
