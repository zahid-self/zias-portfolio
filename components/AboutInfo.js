import { useState } from "react";
const AboutInfo = () => {
  const [openTab, setOpenTab] = useState(1);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-[70px]">
      <ul>
        <li>
          <bittom
            onClick={() => setOpenTab(1)}
            className={`block cursor-pointer border-b p-5 text-xl font-medium capitalize lg:p-6 ${
              openTab === 1 ? "border-[#B8B8B8]" : "border-transparent"
            }`}
          >
            My Bio
          </bittom>
        </li>
        <li>
          <bittom
            onClick={() => setOpenTab(2)}
            className={`block cursor-pointer border-b p-5 text-xl font-medium capitalize lg:p-6 ${
              openTab === 2 ? "border-[#B8B8B8]" : "border-transparent"
            }`}
          >
            Skills
          </bittom>
        </li>
        <li>
          <bittom
            onClick={() => setOpenTab(4)}
            className={`block cursor-pointer border-b p-5 text-xl font-medium capitalize lg:p-6 ${
              openTab === 4 ? "border-[#B8B8B8]" : "border-transparent"
            }`}
          >
            Career
          </bittom>
        </li>
        <li>
          <bittom
            onClick={() => setOpenTab(3)}
            className={`block cursor-pointer border-b p-5 text-xl font-medium capitalize lg:p-6 ${
              openTab === 3 ? "border-[#B8B8B8]" : "border-transparent"
            }`}
          >
            Education
          </bittom>
        </li>
      </ul>
      <div className="sm:col-span-2 md:col-span-3 lg:pl-[100px]">
        <div className={openTab === 1 ? "block" : "hidden"}>
          {/* <div class="relative overflow-x-auto bg-[#292929]">
            <table class="w-full text-base text-whtie text-left">
              <tbody>
                <tr class="border-b border-[#3D3D3D] last:border-none">
                  <td class="px-6 py-4"><span className="text-[#B8B8B8]">Name</span></td>
                  <td class="px-6 py-4 text-right">Md Zia Uddin</td>
                  <td class="px-6 py-4"><span className="text-[#B8B8B8]">Address</span></td>
                  <td class="px-6 py-4 text-right">Muscat, Oman</td>
                </tr>
                <tr class="border-b border-[#3D3D3D] last:border-none">
                  <td class="px-6 py-4"><span className="text-[#B8B8B8]">Profession</span></td>
                  <td class="px-6 py-4 text-right">UX Designer</td>
                  <td class="px-6 py-4"><span className="text-[#B8B8B8]">Phone</span></td>
                  <td class="px-6 py-4 text-right">+1 523 5286 365</td>
                </tr>
                <tr class="border-b border-[#3D3D3D] last:border-none">
                  <td class="px-6 py-4"><span className="text-[#B8B8B8]">Date of birth</span></td>
                  <td class="px-6 py-4 text-right">6th November, 1995</td>
                  <td class="px-6 py-4"><span className="text-[#B8B8B8]">Email</span></td>
                  <td class="px-6 py-4 text-right">ziaaflame@gmail.com</td>
                </tr>
                <tr class="border-b border-[#3D3D3D] last:border-none">
                  <td class="px-6 py-4"><span className="text-[#B8B8B8]">Nationality</span></td>
                  <td class="px-6 py-4 text-right">Bangladeshi</td>
                  <td class="px-6 py-4"><span className="text-[#B8B8B8]">Skype</span></td>
                  <td class="px-6 py-4 text-right">aflamezia</td>
                </tr>
              </tbody>
            </table>
          </div> */}
          <div className="bg-[#292929]">
            <ul>
              <li className="grid grid-cols-1 md:grid-cols-2 text-base text-white">
                <div className="flex justify-between items-center border-b border-[#3D3D3D]">
                  <div className="px-6 py-6 text-[#B8B8B8] capitalize">
                    Name
                  </div>
                  <div className="px-6 py-6">Md Zia Uddin</div>
                </div>
                <div className="flex justify-between items-center border-b border-[#3D3D3D]">
                  <div className="px-6 py-6 text-[#B8B8B8] capitalize">
                    Address
                  </div>
                  <div className="px-6 py-6">Muscat, Oman</div>
                </div>
              </li>
              <li className="grid grid-cols-1 md:grid-cols-2 text-base text-white">
                <div className="flex justify-between items-center border-b border-[#3D3D3D]">
                  <div className="px-6 py-6 text-[#B8B8B8] capitalize">
                    Profession
                  </div>
                  <div className="px-6 py-6">UX Designer</div>
                </div>
                <div className="flex justify-between items-center border-b border-[#3D3D3D]">
                  <div className="px-6 py-6 text-[#B8B8B8] capitalize">
                    Phone
                  </div>
                  <div className="px-6 py-6">+1 523 5286 365</div>
                </div>
              </li>
              <li className="grid grid-cols-1 md:grid-cols-2 text-base text-white">
                <div className="flex justify-between items-center border-b border-[#3D3D3D]">
                  <div className="px-6 py-6 text-[#B8B8B8] capitalize">
                    Date of birth
                  </div>
                  <div className="px-6 py-6">6th November, 1995</div>
                </div>
                <div className="flex justify-between items-center border-b border-[#3D3D3D]">
                  <div className="px-6 py-6 text-[#B8B8B8] capitalize">
                    Email
                  </div>
                  <div className="px-6 py-6">ziaaflame@gmail.com</div>
                </div>
              </li>
              <li className="grid grid-cols-1 md:grid-cols-2 text-base text-white">
                <div className="flex justify-between items-center border-b border-[#3D3D3D]">
                  <div className="px-6 py-6 text-[#B8B8B8] capitalize">
                    Nationality
                  </div>
                  <div className="px-6 py-6">Bangladeshi</div>
                </div>
                <div className="flex justify-between items-center border-b border-[#3D3D3D]">
                  <div className="px-6 py-6 text-[#B8B8B8] capitalize">
                    Skype
                  </div>
                  <div className="px-6 py-6">aflamezia</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className={openTab === 2 ? "block" : "hidden"}>
          <div className="bg-[#292929]">
            <ul>
              <li className="border-b border-[#3D3D3D] last:border-none grid grid-cols-1 md:grid-cols-3 text-base text-white px-6 py-4 gap-y-4">
                <div>
                  <h4>User Research</h4>
                </div>
                <div className="flex gap-x-6 items-center md:col-span-2">
                  <h4 className="text-[#B8B8B8] w-[130px]">Intermediate</h4>
                  <div className="w-full h-2 rounded-[20px] border border-[#B8B8B8] px-1 flex items-center">
                    <div
                      className="h-[2px] bg-white rounded-[20px]"
                      style={{ width: "50%" }}
                    ></div>
                  </div>
                </div>
              </li>
              <li className="border-b border-[#3D3D3D] last:border-none grid grid-cols-1 md:grid-cols-3 text-base text-white px-6 py-4 gap-y-4">
                <div>
                  <h4>Design System</h4>
                </div>
                <div className="flex gap-x-6 items-center md:col-span-2">
                  <h4 className="text-[#B8B8B8] w-[130px]">Expert</h4>
                  <div className="w-full h-2 rounded-[20px] border border-[#B8B8B8] px-1 flex items-center">
                    <div
                      className="h-[2px] bg-white rounded-[20px]"
                      style={{ width: "30%" }}
                    ></div>
                  </div>
                </div>
              </li>
              <li className="border-b border-[#3D3D3D] last:border-none grid grid-cols-1 md:grid-cols-3 text-base text-white px-6 py-4 gap-y-4">
                <div>
                  <h4>User Centered Design</h4>
                </div>
                <div className="flex gap-x-6 items-center md:col-span-2">
                  <h4 className="text-[#B8B8B8] w-[130px]">Expert</h4>
                  <div className="w-full h-2 rounded-[20px] border border-[#B8B8B8] px-1 flex items-center">
                    <div
                      className="h-[2px] bg-white rounded-[20px]"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                </div>
              </li>
              <li className="border-b border-[#3D3D3D] last:border-none grid grid-cols-1 md:grid-cols-3 text-base text-white px-6 py-4 gap-y-4">
                <div>
                  <h4>Prototype</h4>
                </div>
                <div className="flex gap-x-6 items-center md:col-span-2">
                  <h4 className="text-[#B8B8B8] w-[130px]">Expert</h4>
                  <div className="w-full h-2 rounded-[20px] border border-[#B8B8B8] px-1 flex items-center">
                    <div
                      className="h-[2px] bg-white rounded-[20px]"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className={openTab === 3 ? "block" : "hidden"}>
          <div className="bg-[#292929]">
            <ul>
              <li className="border-b border-[#3D3D3D] last:border-none grid grid-cols-1 md:grid-cols-3 text-base text-white px-6 py-4 gap-y-4">
                <div>
                  <h4>Foundation of UX Design</h4>
                </div>
                <div className="flex justify-between gap-x-6 items-center md:col-span-2 text-[#B8B8B8]">
                  <h4 className="flex-1">Google by Coursera</h4>
                  <h4>2021</h4>
                </div>
              </li>
              <li className="border-b border-[#3D3D3D] last:border-none grid grid-cols-1 md:grid-cols-3 text-base text-white px-6 py-4 gap-y-4">
                <div>
                  <h4>Bachelor of Business Studies</h4>
                </div>
                <div className="flex justify-between gap-x-6 items-center md:col-span-2 text-[#B8B8B8]">
                  <h4 className="flex-1">National University, Bangladesh</h4>
                  <h4>2014-2017</h4>
                </div>
              </li>
              <li className="border-b border-[#3D3D3D] last:border-none grid grid-cols-1 md:grid-cols-3 text-base text-white px-6 py-4 gap-y-4">
                <div>
                  <h4>Higher Secondary School</h4>
                </div>
                <div className="flex justify-between gap-x-6 items-center md:col-span-2 text-[#B8B8B8]">
                  <h4 className="flex-1">Hathazari College, Chattogram</h4>
                  <h4>2011-2012</h4>
                </div>
              </li>
              <li className="border-b border-[#3D3D3D] last:border-none grid grid-cols-1 md:grid-cols-3 text-base text-white px-6 py-4 gap-y-4">
                <div>
                  <h4>Secondary School</h4>
                </div>
                <div className="flex justify-between gap-x-6 items-center md:col-span-2 text-[#B8B8B8]">
                  <h4 className="flex-1">Hathazari Parbati Hight School</h4>
                  <h4>2009-2010</h4>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className={openTab === 4 ? "block" : "hidden"}>
          <div className="bg-[#292929]">
            <ul>
              <li className="border-b border-[#3D3D3D] last:border-none grid grid-cols-1 md:grid-cols-3 text-base text-white px-6 py-4 gap-y-4">
                <div>
                  <h4>User Interface Designer</h4>
                  <p className="text-xs text-[#B8B8B8]">Jan 2022 - Present</p>
                </div>
                <div className="md:col-span-2">
                  <h4>Ultimate Hardware Solution LLC</h4>
                  <p className="text-xs text-[#B8B8B8]">Muscat, Oman</p>
                </div>
              </li>
              <li className="border-b border-[#3D3D3D] last:border-none grid grid-cols-1 md:grid-cols-3 text-base text-white px-6 py-4 gap-y-4">
                <div>
                  <h4>UX/UI Designer</h4>
                  <p className="text-xs text-[#B8B8B8]">Apr 2021 - Oct 2021 </p>
                </div>
                <div className="md:col-span-2">
                  <h4>Staff Asia</h4>
                  <p className="text-xs text-[#B8B8B8]">Sylhet, Bangladesh</p>
                </div>
              </li>
              <li className="border-b border-[#3D3D3D] last:border-none grid grid-cols-1 md:grid-cols-3 text-base text-white px-6 py-4 gap-y-4">
                <div>
                  <h4>UX/UI Designer</h4>
                  <p className="text-xs text-[#B8B8B8]">Sep 2020 - Mar 2021</p>
                </div>
                <div className="md:col-span-2">
                  <h4>ZainikLab</h4>
                  <p className="text-xs text-[#B8B8B8]">Khulna, Bangladesh</p>
                </div>
              </li>
              <li className="border-b border-[#3D3D3D] last:border-none grid grid-cols-1 md:grid-cols-3 text-base text-white px-6 py-4 gap-y-4">
                <div>
                  <h4>Graphic Designer</h4>
                  <p className="text-xs text-[#B8B8B8]">May 2017 - Mar 2020</p>
                </div>
                <div className="md:col-span-2">
                  <h4>Image Multimedia</h4>
                  <p className="text-xs text-[#B8B8B8]">Chattogram, Bangladesh</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutInfo;
