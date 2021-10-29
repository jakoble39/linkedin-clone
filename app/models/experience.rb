# == Schema Information
#
# Table name: experiences
#
#  id          :bigint           not null, primary key
#  user_id     :integer          not null
#  title       :string           not null
#  company     :string           not null
#  location    :string
#  current     :boolean          not null
#  start_date  :date             not null
#  end_date    :date
#  industry    :string
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Experience < ApplicationRecord
    validates :title, :company, :curent, presence: true

    belongs_to :user
end
