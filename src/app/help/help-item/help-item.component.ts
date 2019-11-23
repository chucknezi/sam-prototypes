import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

import { HelpData, HelpType, VideoData, FAQData, TermData, FeatureData } from '../service/help.model';

@Component({
  selector: 'help-item',
  templateUrl: './help-item.component.html',
  styleUrls: ['./help-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HelpItemComponent implements OnInit {

  @Input() model: HelpData

  constructor() { }

  ngOnInit() {
  }

  getLabel(type: HelpType): string {
    switch(type) {
      case HelpType.Video: {
        return "Video";
      }
      case HelpType.Term: {
        return "Glossary";
      }
      case HelpType.FAQ: { 
        return "FAQ";
      }
      case HelpType.Feature: {
      	return "Feature";
      }
      return "None";
    }
  }

}